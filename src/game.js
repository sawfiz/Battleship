import { Player } from '../src/players';

function playFleet(gameBoard) {
  gameBoard.initBoard();
  gameBoard.placeShip('carrier', 0, 0, 'horizontal');
  gameBoard.placeShip('battelship', 1, 0, 'horizontal');
  gameBoard.placeShip('cruiser', 2, 0, 'horizontal');
  gameBoard.placeShip('submarine', 3, 0, 'horizontal');
  gameBoard.placeShip('destroyer', 4, 0, 'horizontal');
}

export const game = () => {
  const Player1 = Player('Tom', 'human');
  const Player2 = Player('Jerry', 'computer');

  playFleet(Player1.gameBoard);
  playFleet(Player2.gameBoard);

  Player1.gameBoard.printBoard();
  Player2.gameBoard.printBoard();
};
