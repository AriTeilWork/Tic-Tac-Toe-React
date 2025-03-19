
import { useState } from 'react';
import './index.css';
import GameBoard from './components/GameBoard.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';


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
  

  return (
    <h1>Coming soon React Tic-Tac-Toe</h1>
  )
}

export default App
