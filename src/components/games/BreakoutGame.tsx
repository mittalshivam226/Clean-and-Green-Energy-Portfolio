import React, { useState, useEffect, useCallback } from 'react';
import { GameProps } from '../../types/game';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 10;
const BALL_SIZE = 8;
const BRICK_ROWS = 5;
const BRICK_COLS = 10;
const BRICK_WIDTH = CANVAS_WIDTH / BRICK_COLS;
const BRICK_HEIGHT = 20;

interface Brick {
  x: number;
  y: number;
  visible: boolean;
}

const BreakoutGame: React.FC<GameProps> = ({ onBack }) => {
  const [paddleX, setPaddleX] = useState(CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2);
  const [ballX, setBallX] = useState(CANVAS_WIDTH / 2);
  const [ballY, setBallY] = useState(CANVAS_HEIGHT - 50);
  const [ballVelX, setBallVelX] = useState(4);
  const [ballVelY, setBallVelY] = useState(-4);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [bricks, setBricks] = useState<Brick[]>([]);

  const initializeBricks = () => {
    const newBricks: Brick[] = [];
    for (let row = 0; row < BRICK_ROWS; row++) {
      for (let col = 0; col < BRICK_COLS; col++) {
        newBricks.push({
          x: col * BRICK_WIDTH,
          y: row * BRICK_HEIGHT + 50,
          visible: true
        });
      }
    }
    setBricks(newBricks);
  };

  const resetGame = () => {
    setPaddleX(CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2);
    setBallX(CANVAS_WIDTH / 2);
    setBallY(CANVAS_HEIGHT - 50);
    setBallVelX(4);
    setBallVelY(-4);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    initializeBricks();
  };

  useEffect(() => {
    initializeBricks();
  }, []);

  const updateGame = useCallback(() => {
    if (gameOver || gameWon) return;

    // Move ball
    setBallX(prev => prev + ballVelX);
    setBallY(prev => prev + ballVelY);

    // Ball collision with walls
    if (ballX <= 0 || ballX >= CANVAS_WIDTH - BALL_SIZE) {
      setBallVelX(prev => -prev);
    }
    
    if (ballY <= 0) {
      setBallVelY(prev => -prev);
    }

    // Ball collision with paddle
    if (ballY >= CANVAS_HEIGHT - PADDLE_HEIGHT - BALL_SIZE &&
        ballX >= paddleX && ballX <= paddleX + PADDLE_WIDTH) {
      setBallVelY(prev => -Math.abs(prev));
      // Add some angle based on where ball hits paddle
      const hitPos = (ballX - paddleX) / PADDLE_WIDTH;
      setBallVelX(prev => (hitPos - 0.5) * 8);
    }

    // Ball falls below paddle
    if (ballY > CANVAS_HEIGHT) {
      setGameOver(true);
    }

    // Ball collision with bricks
    setBricks(prevBricks => {
      const newBricks = [...prevBricks];
      let hitBrick = false;

      for (let i = 0; i < newBricks.length; i++) {
        const brick = newBricks[i];
        if (brick.visible &&
            ballX < brick.x + BRICK_WIDTH &&
            ballX + BALL_SIZE > brick.x &&
            ballY < brick.y + BRICK_HEIGHT &&
            ballY + BALL_SIZE > brick.y) {
          brick.visible = false;
          hitBrick = true;
          setScore(prev => prev + 10);
          break;
        }
      }

      if (hitBrick) {
        setBallVelY(prev => -prev);
      }

      // Check if all bricks are destroyed
      if (newBricks.every(brick => !brick.visible)) {
        setGameWon(true);
      }

      return newBricks;
    });
  }, [ballX, ballY, ballVelX, ballVelY, paddleX, gameOver, gameWon]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver || gameWon) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          setPaddleX(prev => Math.max(0, prev - 20));
          break;
        case 'ArrowRight':
          setPaddleX(prev => Math.min(CANVAS_WIDTH - PADDLE_WIDTH, prev + 20));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, gameWon]);

  useEffect(() => {
    const gameInterval = setInterval(updateGame, 16);
    return () => clearInterval(gameInterval);
  }, [updateGame]);

  const drawGame = () => {
    const canvas = document.getElementById('breakout-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw bricks
    bricks.forEach(brick => {
      if (brick.visible) {
        ctx.fillStyle = '#ff6600';
        ctx.fillRect(brick.x + 1, brick.y + 1, BRICK_WIDTH - 2, BRICK_HEIGHT - 2);
      }
    });

    // Draw paddle
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(paddleX, CANVAS_HEIGHT - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Draw ball
    ctx.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
  };

  useEffect(() => {
    drawGame();
  }, [paddleX, ballX, ballY, bricks]);

  return (
    <div className="game-container">
      <div className="game-header">
        <button className="back-button" onClick={onBack}>BACK</button>
        <h2 className="game-title">BREAKOUT</h2>
        <div className="game-score">SCORE: {score}</div>
      </div>
      
      <canvas
        id="breakout-canvas"
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
        Use arrow keys to move the paddle
      </div>
    </div>
  );
};

export default BreakoutGame;