import React from 'react';

function GameBoard({ gameBoard = [], onSelectSquare }) {
  return (
    <div className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <button
              key={colIndex}
              className="board-cell"
              onClick={() => onSelectSquare(rowIndex, colIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;