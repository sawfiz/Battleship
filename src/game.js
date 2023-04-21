import { updateDisplay } from './dom';
import delay from './delay';

// Generates a random number 0-9
function getRandomNum() {
  return Math.floor(Math.random() * 10);
}

// Place a ship at a random location with a random direction
function placeShipRandom(gameBoard, type) {
  let row, col, direction;
  do {
    row = getRandomNum();
    col = getRandomNum();
    direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
  } while (!gameBoard.placeShip(type, row, col, direction));
}

// Place all 5 ships on an empty board
function placeFleet(gameBoard) {
  gameBoard.initBoard();
  placeShipRandom(gameBoard, 'carrier');
  placeShipRandom(gameBoard, 'battleship');
  placeShipRandom(gameBoard, 'cruiser');
  placeShipRandom(gameBoard, 'submarine');
  placeShipRandom(gameBoard, 'destroyer');
}

export const game = (human, computer) => {
  let cheat = false;


  // Randomly places ships on the human board
  // placeFleet(human.gameBoard);
  // Randomly places ships on the computer board
  placeFleet(computer.gameBoard);

  updateDisplay(human, computer, cheat);

  // Wait for human player to go first
  // Human player places bombs onto computer's board
  const computerBoardEl = document.querySelector('#computer-board');
  computerBoardEl.addEventListener('click', async (e) => {
    // Check if a cell is clicked on
    // Cells that have been clicked on have `pointerEvents = none`
    // When those cells are click, the class of the target is the board, not cell
    if (e.target.classList.contains('cell')) {
      // Retrieve the row and col from the element's dataset
      // These were set when these cells are created in dom.js
      const { row } = e.target.dataset;
      const { col } = e.target.dataset;

      // Attack the computer's gameBoard
      computer.gameBoard.receiveAttack(row, col);
      updateDisplay(human, computer, cheat);
      // Check if it is the winning move
      if (computer.gameBoard.isGameOver()) {
        await delay(500);
        alert('Game Over, you won!');
      }
      
      // Computer bombs the human player board
      human.getBombed();
      updateDisplay(human, computer, cheat);
      // Check if it is the winning move
      if (human.gameBoard.isGameOver()) {
        await delay(500);
        alert('Game Over, you lost!');
      }
    }
  });

  const cheatCheckbox = document.querySelector('#cheat')
  cheatCheckbox.addEventListener('change', () => {
    cheat = cheatCheckbox.checked;
    updateDisplay(human, computer, cheat);
  })
};
