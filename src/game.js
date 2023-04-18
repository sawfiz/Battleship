import { Player } from '../src/players';
import { updateDisplay } from './dom';

function placeFleet(gameBoard) {
  gameBoard.initBoard();
  gameBoard.placeShip('carrier', 0, 0, 'horizontal');
  gameBoard.placeShip('battleship', 1, 0, 'horizontal');
  gameBoard.placeShip('cruiser', 2, 0, 'horizontal');
  gameBoard.placeShip('submarine', 3, 0, 'horizontal');
  gameBoard.placeShip('destroyer', 4, 0, 'horizontal');
}

export const game = () => {
  const human = Player('Tom', 'human');
  const computer = Player('Jerry', 'computer');

  placeFleet(human.gameBoard);
  placeFleet(computer.gameBoard);

  human.gameBoard.printBoard();
  computer.gameBoard.printBoard();

  human.gameBoard.placeBomb(0,0)
  human.gameBoard.placeBomb(0,5)
  updateDisplay(human, computer)
};
