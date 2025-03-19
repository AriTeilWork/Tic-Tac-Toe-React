import { useState } from 'react';
import { useEffect } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import './index.css';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { main } from 'framer-motion/client';


const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);

  function handleSelectSquare(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] !== null) {
      return; // Prevent overwriting an already selected square
    }

    setGameBoard((prevBoard) => {
      const updatedBoard = prevBoard.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex ? activePlayer : cell
        )
      );
      return updatedBoard;
    });

    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurns,
    ]);

    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          gameBoard={gameBoard}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;