/**
 * GameBoard component renders a tic-tac-toe game board.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onSelectSquare - Callback function triggered when a square is selected.
 *        It receives the row and column indices of the selected square as arguments.
 * @param {Array<Array<string|null>>} props.board - A 2D array representing the game board.
 *        Each element is either a player's symbol (e.g., "X" or "O") or null for an empty square.
 *
 * @returns {JSX.Element} The rendered game board component.
 */
export default function GameBoard({ onSelectSquare, board }) {
    return (
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}//
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
  }