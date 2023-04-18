import { GameBoard } from '../src/gameBoard';

export const Player = (name, type) => {
  const gameBoard = GameBoard();

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
    }
  };
};
