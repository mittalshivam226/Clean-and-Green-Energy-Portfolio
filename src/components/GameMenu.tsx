import React from 'react';
import { Game } from '../types/game';

interface GameMenuProps {
  games: Game[];
  onGameSelect: (gameId: string) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ games, onGameSelect }) => {
  return (
    <div className="game-menu">
      <h1 className="menu-title">RETRO ARCADE</h1>
      <div className="games-grid">
        {games.map((game) => (
          <button
            key={game.id}
            className="game-button"
            onClick={() => onGameSelect(game.id)}
          >
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameMenu;