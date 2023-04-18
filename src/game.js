import { Player } from '../src/players';
import { updateDisplay } from './dom';

function getRandomNum() {
  return Math.floor(Math.random() * 10);
}

function placeShipRandom(gameBoard, type) {
  let row, col, direction;
  do {
     row = getRandomNum();
     col = getRandomNum();
     direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
  } while (!gameBoard.placeShip(type, row, col, direction));
}

function placeFleet(gameBoard) {
  gameBoard.initBoard();
  placeShipRandom(gameBoard, 'carrier');
  placeShipRandom(gameBoard, 'battleship');
  placeShipRandom(gameBoard, 'cruiser');
  placeShipRandom(gameBoard, 'submarine');
  placeShipRandom(gameBoard, 'destroyer');
}

export const game = () => {
  const human = Player('Tom', 'human');
  const computer = Player('Jerry', 'computer');

  placeFleet(human.gameBoard);
  placeFleet(computer.gameBoard);

  human.gameBoard.printBoard();
  computer.gameBoard.printBoard();

  human.gameBoard.placeBomb(0, 0);
  human.gameBoard.placeBomb(0, 5);
  updateDisplay(human, computer);
};
