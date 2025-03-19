
import { useState } from 'react';
import './index.css';
import GameBoard from './components/GameBoard.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { main } from 'framer-motion/client';


/*
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};
*/ //for future use

/**
 * Represents the initial state of the Tic-Tac-Toe game board.
 * It is a 3x3 grid where each cell is initialized to `null`.
 * 
 * @constant {Array<Array<null>>} INITIAL_GAME_BOARD
 */
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  

  return <main>
    <div id="game-container">
      <ol>
        <li>
          <span id="player-name">Player 1</span>
        </li>
        <li>
          <span id="player-symbol">X</span>
        </li>

        <li>
          <span id="player-name">Player 2</span>
        </li>
        <li>
          <span id="player-symbol">O</span>
        </li>

      </ol>
      Game BOARD
    </div>
  </main>
}

export default App
