import { Cell } from './createCell';

const BOARDSIZE = 10;

export const GameBoard = () => {
  let board;

  const initBoard = () => {
    board = [];
    for (let i = 0; i < BOARDSIZE; i++) {
      board[i] = []
      for (let j = 0; j < BOARDSIZE; j++) {
        board[i].push(Cell());
      }
        console.log("🚀 ~ file: gameBoard.js:14 ~ initBoard ~ board[i]:", board[i])
    }
  };

  const printBoard = () => {
    let display = '';
    for (let i = 0; i < BOARDSIZE; i++) {
      for (let j = 0; j < BOARDSIZE; j++) {
        if (board[i][j].isBombed) {
          display = 'x';
          if (board[i][j].hasShip) {
            display += 'S';
          } else {
            display += ' ';
          }
        } else display += '. ';
      }
      display += '\n'
    }
    console.log(display);
  };

  return {
    initBoard,
    printBoard,
  };
};
