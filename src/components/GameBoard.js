import React, { useState } from 'react';
import './game-board.scss';

const PLAYER_ONE = 'playerOne';
const PLAYER_TWO = 'playerTwo';

const GameBoard = ({ playerOne, playerTwo }) => {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);

  const [gameBoardMatrix, updateGameBoardMatrix] = useState([
    [
      0,0,0
    ],[
      0,0,0
    ],[
      0,0,0
    ]
  ])


  const playerIcons = {
    playerOne: 'X',
    playerTwo: 'O',
  };

  const togglePlayer = () => {
    if(currentPlayer === PLAYER_ONE) {
      setCurrentPlayer(PLAYER_TWO)
    } else {
      setCurrentPlayer(PLAYER_ONE)
    }
  }

  const matrix = [
      [
        'X', 0, 0
      ],[
        'O','O','O'
      ],[
        'X',0,0
      ]
    ];

    // Icons at same colIdx are the same
    // Icons at same rowIdx are the same
    // (0,0 1,1 2,2) (2,2 1,1 0,0)

  const checkForWinner = (matrix) => {
    let winner = "Draw";
    // Same Row
    matrix.forEach((row, rowIdx) => {
      const colIdx = 0;
      const iconToCheck = matrix[rowIdx][colIdx];

      if (
        iconToCheck &&
        iconToCheck === matrix[rowIdx][colIdx + 1] &&
        iconToCheck === matrix[rowIdx][colIdx + 2]
        ) {
          winner =  iconToCheck;
        }

      if
    })
    return winner;
  }

  const handleTurn = (row, square) => {
    const newGameBoard = [...gameBoardMatrix];
    newGameBoard[row][square] = playerIcons[currentPlayer];
    updateGameBoardMatrix(newGameBoard);
    togglePlayer();
  }

  const displaySquareIcon = (row, square) => {
    return gameBoardMatrix[row][square];
  }

  return (
    <div className="GameBoard">
      {[1..3].map((rowNum) => (
        <div className="row">
          {[1..3].map((squareNum) => (
            <div
              onClick={() => handleTurn(rowNum, squareNum)}
              className="square">
              { displaySquareIcon(rowNum, squareNum) }
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


export default GameBoard;
