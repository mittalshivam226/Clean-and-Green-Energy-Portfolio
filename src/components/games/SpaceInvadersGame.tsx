import React, { useState, useEffect, useCallback } from 'react';
import { GameProps } from '../../types/game';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 20;
const BULLET_WIDTH = 3;
const BULLET_HEIGHT = 10;
const INVADER_WIDTH = 20;
const INVADER_HEIGHT = 15;

interface Position {
  x: number;
  y: number;
}

interface Invader extends Position {
  alive: boolean;
}

const SpaceInvadersGame: React.FC<GameProps> = ({ onBack }) => {
  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2);
  const [bullets, setBullets] = useState<Position[]>([]);
  const [invaders, setInvaders] = useState<Invader[]>([]);
  const [invaderDirection, setInvaderDirection] = useState(1);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const initializeInvaders = () => {
    const newInvaders: Invader[] = [];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 10; col++) {
        newInvaders.push({
          x: col * 50 + 50,
          y: row * 40 + 50,
          alive: true
        });
      }
    }
    setInvaders(newInvaders);
  };

  const resetGame = () => {
    setPlayerX(CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2);
    setBullets([]);
    setInvaderDirection(1);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    initializeInvaders();
  };

  useEffect(() => {
    initializeInvaders();
  }, []);

  const shoot = () => {
    setBullets(prev => [...prev, { x: playerX + PLAYER_WIDTH / 2, y: CANVAS_HEIGHT - PLAYER_HEIGHT - 10 }]);
  };

  const updateGame = useCallback(() => {
    if (gameOver || gameWon) return;

    // Move bullets
    setBullets(prev => prev
      .map(bullet => ({ ...bullet, y: bullet.y - 8 }))
      .filter(bullet => bullet.y > 0)
    );

    // Move invaders
    setInvaders(prev => {
      const newInvaders = [...prev];
      let shouldMoveDown = false;

      // Check if any invader hits the edge
      const aliveInvaders = newInvaders.filter(inv => inv.alive);
      const leftmost = Math.min(...aliveInvaders.map(inv => inv.x));
      const rightmost = Math.max(...aliveInvaders.map(inv => inv.x));

      if (leftmost <= 0 || rightmost >= CANVAS_WIDTH - INVADER_WIDTH) {
        shouldMoveDown = true;
        setInvaderDirection(prev => -prev);
      }

      // Move invaders
      newInvaders.forEach(invader => {
        if (invader.alive) {
          if (shouldMoveDown) {
            invader.y += 20;
          } else {
            invader.x += invaderDirection * 2;
          }
        }
      });

      // Check if invaders reached bottom
      if (aliveInvaders.some(inv => inv.y >= CANVAS_HEIGHT - 50)) {
        setGameOver(true);
      }

      return newInvaders;
    });

    // Check bullet-invader collisions
    setBullets(prevBullets => {
      const remainingBullets = [...prevBullets];
      
      setInvaders(prevInvaders => {
        const newInvaders = [...prevInvaders];
        
        for (let i = remainingBullets.length - 1; i >= 0; i--) {
          const bullet = remainingBullets[i];
          
          for (let j = 0; j < newInvaders.length; j++) {
            const invader = newInvaders[j];
            
            if (invader.alive &&
                bullet.x >= invader.x &&
                bullet.x <= invader.x + INVADER_WIDTH &&
                bullet.y >= invader.y &&
                bullet.y <= invader.y + INVADER_HEIGHT) {
              
              invader.alive = false;
              remainingBullets.splice(i, 1);
              setScore(prev => prev + 100);
              break;
            }
          }
        }

        // Check if all invaders are destroyed
        if (newInvaders.every(inv => !inv.alive)) {
          setGameWon(true);
        }

        return newInvaders;
      });

      return remainingBullets;
    });
  }, [invaderDirection, gameOver, gameWon]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver || gameWon) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          setPlayerX(prev => Math.max(0, prev - 15));
          break;
        case 'ArrowRight':
          setPlayerX(prev => Math.min(CANVAS_WIDTH - PLAYER_WIDTH, prev + 15));
          break;
        case ' ':
          e.preventDefault();
          shoot();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, gameWon]);

  useEffect(() => {
    const gameInterval = setInterval(updateGame, 50);
    return () => clearInterval(gameInterval);
  }, [updateGame]);

  const drawGame = () => {
    const canvas = document.getElementById('space-invaders-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw player
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(playerX, CANVAS_HEIGHT - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);

    // Draw bullets
    ctx.fillStyle = '#ffff00';
    bullets.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, BULLET_WIDTH, BULLET_HEIGHT);
    });

    // Draw invaders
    ctx.fillStyle = '#ff0000';
    invaders.forEach(invader => {
      if (invader.alive) {
        ctx.fillRect(invader.x, invader.y, INVADER_WIDTH, INVADER_HEIGHT);
      }
    });
  };

  useEffect(() => {
    drawGame();
  }, [playerX, bullets, invaders]);

  return (
    <div className="game-container">
      <div className="game-header">
        <button className="back-button" onClick={onBack}>BACK</button>
        <h2 className="game-title">SPACE INVADERS</h2>
        <div className="game-score">SCORE: {score}</div>
      </div>
      
      <canvas
        id="space-invaders-canvas"
        className="game-canvas"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
      
      {(gameOver || gameWon) && (
        <div className="game-over">
          <h2>{gameWon ? 'YOU WIN!' : 'GAME OVER'}</h2>
          <p>Final Score: {score}</p>
          <button className="restart-button" onClick={resetGame}>
            PLAY AGAIN
          </button>
        </div>
      )}
      
      <div className="controls">
        Arrow keys to move, SPACE to shoot
      </div>
    </div>
  );
};

export default SpaceInvadersGame;