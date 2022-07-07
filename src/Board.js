import { useState } from "react"
import Square from "./Square"

function Board() {

    const [status, setStatus] = useState('Next player: X');
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();

    const handleClick = (i) => {
      if (squares[i] !== '') {
        alert('already clicked');
        return;
      }
        let copy = [...squares];
        if (status === 'Next player: X') {
          copy[i] = 'X';
          setStatus('Next player: O');
        } else {
          copy[i] = 'O';
          setStatus('Next player: X');
        }
        checkWinner(copy);
        setSquares(copy);
    };

    const checkWinner = (copy) => {
      let combos = {
        across: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
        ],
        down: [
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
        ],
        diagnol: [
          [0, 4, 8],
          [2, 4, 6],
        ],
      };

      for (let combo in combos) {
        combos[combo].forEach((pattern) => {
          if (
            copy[pattern[0]] === '' ||
            copy[pattern[1]] === '' ||
            copy[pattern[2]] === ''
          ) {
              
            } else if (
            copy[pattern[0]] === copy[pattern[1]] &&
            copy[pattern[1]] === copy[pattern[2]]
          ) {
            setWinner(copy[pattern[0]]);
          }
        });
      }
    };

    const handleRestart = () => {
      setWinner(null);
      setSquares(Array(9).fill(''));
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} clickOn={(e) => handleClick(i)}/>
    };

    return (
      <div>
          <p >{status}</p>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <p className="game-info">{winner && (<p>{winner} is the winner!</p>)}</p>
          <button onClick={() => handleRestart()}>Play Again</button>
      </div>
    );
}

export default Board