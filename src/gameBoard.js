import { Cell } from './createCell';
import { BOARDSIZE, FLEET } from './constants';
import { createShip } from './createShip';

export const GameBoard = () => {
  let board;

  const initBoard = () => {
    board = [];
    for (let i = 0; i < BOARDSIZE; i++) {
      board[i] = [];
      for (let j = 0; j < BOARDSIZE; j++) {
        board[i].push(Cell());
      }
    }
  };

  const printBoard = () => {
    let display = '';
    for (let i = 0; i < BOARDSIZE; i++) {
      for (let j = 0; j < BOARDSIZE; j++) {
        if (board[i][j].isBombed) {
          display = 'x';
        } else display += '.';

        if (board[i][j].hasShip) {
          display += 'S';
        } else {
          display += ' ';
        }
      }
      display += '\n';
    }
    console.log(display);
  };

  const placeShip = (type, row, col, direction) => {
    const ship = createShip(type);
    const size = ship.size;

    if (direction === 'horizontal' && col + size > BOARDSIZE)
      throw new Error('Invalid col to place a ship');
    if (direction === 'vertical' && row + size > BOARDSIZE)
      throw new Error('Invalid row to place a ship');

    if (direction === 'vertical') {
      for (let i = 0; i < size; i++) {
        board[row + i][col].placeShip(ship);
      }
    } else {
      if (direction === 'horizontal') {
        for (let i = 0; i < size; i++) {
          board[row][col + i].placeShip(ship);
        }
      }
    }
  };

  function revealShip(ship) {
    console.log(`${ship.type} is sunk`);
  }

  function isGameOver() {
    // let gameOver = true;
    // for (const ship of FLEET) {
    //   gameOver = gameOver && ship.isSunk;
    // }
    // return gameOver;
  }

  const placeBomb = (row, col) => {
    if (board[row][col].isBombed) {
      throw new Error('This location has already been bombed');
    } else {
      board[row][col].attack();
      if (board[row][col].hasShip) {
        const ship = board[row][col].ship;
        ship.hit();
        if (ship.isSunk) {
          revealShip(ship);
          if (isGameOver()) {
            isGameOver();
          }
        }
        return true;
      }
      return false;
    }
  };

  return {
    get board() {
      return board;
    },
    initBoard,
    printBoard,
    placeShip,
    placeBomb,
  };
};
