import { GameBoard } from '../src/gameBoard';

export const Player = (name, type) => {
  const gameBoard = GameBoard();

  function getRandomNum() {
    return Math.floor(Math.random() * 10);
  }
  
  function makeRandomMove() {
    let row, col;
    do {
      row = getRandomNum();
      col = getRandomNum();
    } while (!gameBoard.placeBomb(row, col));
  }

  const makeMove = () => {
    makeRandomMove();
  }

  return {
    set name(value) {
      name = value;
    },
    get name() {
      return name;
    },
    set type(value) {
      type = value;
    },
    get type() {
      return type;
    },
    get gameBoard() {
      return gameBoard;
    },
    makeMove,
  };
};
