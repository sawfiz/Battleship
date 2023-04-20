import { GameBoard } from '../src/gameBoard';

export const Player = (name, type) => {
  const gameBoard = GameBoard();

  function getRandomNum() {
    return Math.floor(Math.random() * 10);
  }
  
  function getBombedRandonly() {
    let row, col;
    do {
      row = getRandomNum();
      col = getRandomNum();
    } while (!gameBoard.receiveAttack(row, col));
  }

  const getBombed = () => {
    getBombedRandonly();
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
    getBombed,
  };
};
