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

  updateDisplay(human, computer);

  // Wait for human player to go first
  // Human player plays bombs computer's board
  const computerBoardEl = document.querySelector('#computer-board');
  computerBoardEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
      const { row } = e.target.dataset;
      const { col } = e.target.dataset;

      if (computer.gameBoard.placeBomb(row, col)) {
        updateDisplay(human, computer);
        if (computer.gameBoard.isGameOver()) {
          alert('Game Over, you won!')
        }
        
        // Computer bombs the human player board
        human.makeMove();
        updateDisplay(human, computer);
        if (human.gameBoard.isGameOver()) {
          alert('Game Over, you lost!')
        }
      }
    }

  });
};
