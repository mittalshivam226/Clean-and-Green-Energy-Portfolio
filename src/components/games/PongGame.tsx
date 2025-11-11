import React, { useState, useEffect, useCallback } from 'react';
import { GameProps } from '../../types/game';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const PADDLE_HEIGHT = 80;
const PADDLE_WIDTH = 10;
const BALL_SIZE = 10;

const PongGame: React.FC<GameProps> = ({ onBack }) => {
  const [playerY, setPlayerY] = useState(CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const [aiY, setAiY] = useState(CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const [ballX, setBallX] = useState(CANVAS_WIDTH / 2);
  const [ballY, setBallY] = useState(CANVAS_HEIGHT / 2);
  const [ballVelX, setBallVelX] = useState(5);
  const [ballVelY, setBallVelY] = useState(3);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetBall = () => {
    setBallX(CANVAS_WIDTH / 2);
    setBallY(CANVAS_HEIGHT / 2);
    setBallVelX(Math.random() > 0.5 ? 5 : -5);
    setBallVelY((Math.random() - 0.5) * 6);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setAiScore(0);
    setGameOver(false);
    resetBall();
  };

  const updateGame = useCallback(() => {
    if (gameOver) return;

    // Move ball
    setBallX(prev => prev + ballVelX);
    setBallY(prev => prev + ballVelY);

    // Ball collision with top/bottom walls
    if (ballY <= 0 || ballY >= CANVAS_HEIGHT - BALL_SIZE) {
      setBallVelY(prev => -prev);
    }

    // Ball collision with paddles
    if (ballX <= PADDLE_WIDTH && ballY >= playerY && ballY <= playerY + PADDLE_HEIGHT) {
      setBallVelX(prev => Math.abs(prev));
    }
    
    if (ballX >= CANVAS_WIDTH - PADDLE_WIDTH - BALL_SIZE && ballY >= aiY && ballY <= aiY + PADDLE_HEIGHT) {
      setBallVelX(prev => -Math.abs(prev));
    }

    // Scoring
    if (ballX < 0) {
      setAiScore(prev => {
        const newScore = prev + 1;
        if (newScore >= 5) setGameOver(true);
        return newScore;
      });
      resetBall();
    }
    
    if (ballX > CANVAS_WIDTH) {
      setPlayerScore(prev => {
        const newScore = prev + 1;
        if (newScore >= 5) setGameOver(true);
        return newScore;
      });
      resetBall();
    }

    // AI movement
    setAiY(prev => {
      const aiCenter = prev + PADDLE_HEIGHT / 2;
      const ballCenter = ballY + BALL_SIZE / 2;
      if (aiCenter < ballCenter - 35) return prev + 4;
      if (aiCenter > ballCenter + 35) return prev - 4;
      return prev;
    });
  }, [ballX, ballY, ballVelX, ballVelY, playerY, aiY, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver) return;
      
      switch (e.key) {
        case 'ArrowUp':
          setPlayerY(prev => Math.max(0, prev - 20));
          break;
        case 'ArrowDown':
          setPlayerY(prev => Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, prev + 20));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver]);

  useEffect(() => {
    const gameInterval = setInterval(updateGame, 16);
    return () => clearInterval(gameInterval);
  }, [updateGame]);

  const drawGame = () => {
    const canvas = document.getElementById('pong-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw center line
    ctx.setLineDash([5, 15]);
    ctx.beginPath();
    ctx.moveTo(CANVAS_WIDTH / 2, 0);
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
    ctx.strokeStyle = '#00ff00';
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(0, playerY, PADDLE_WIDTH, PADDLE_HEIGHT);
    ctx.fillRect(CANVAS_WIDTH - PADDLE_WIDTH, aiY, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Draw ball
    ctx.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
  };

  useEffect(() => {
    drawGame();
  }, [playerY, aiY, ballX, ballY]);

  return (
    <div className="game-container">
      <div className="game-header">
        <button className="back-button" onClick={onBack}>BACK</button>
        <h2 className="game-title">PONG</h2>
        <div className="game-score">PLAYER: {playerScore} | AI: {aiScore}</div>
      </div>
      
      <canvas
        id="pong-canvas"
        className="game-canvas"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
      
      {gameOver && (
        <div className="game-over">
          <h2>{playerScore > aiScore ? 'YOU WIN!' : 'AI WINS!'}</h2>
          <p>Final Score: {playerScore} - {aiScore}</p>
          <button className="restart-button" onClick={resetGame}>
            PLAY AGAIN
          </button>
        </div>
      )}
      
      <div className="controls">
        Use arrow keys to move your paddle
      </div>
    </div>
  );
};

export default PongGame;