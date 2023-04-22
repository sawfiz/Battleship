import { updateDisplay, stopPlaying } from './dom';
import delay from './delay';
import { placeFleet } from './deployRandomly';

export const game = (human, computer) => {
  let cheat = false;
  let turn = 0;

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
    let row, col;
    if (e.target.classList.contains('cell')) {
      // Retrieve the row and col from the element's dataset
      // These were set when these cells are created in dom.js
      row = e.target.dataset.row;
      col = e.target.dataset.col;
    }
    // If cheating, the target of the click is image, whose parent is cell
    else if (e.target.parentElement.classList.contains('cell')) {
      row = e.target.parentElement.dataset.row;
      col = e.target.parentElement.dataset.col;
    }

    turn++;
    const turnEl = document.querySelector('.turn');
    turnEl.innerHTML = '';
    turnEl.innerText = `Turn: ${turn}`;

    // Attack the computer's gameBoard
    computer.gameBoard.receiveAttack(row, col);
    updateDisplay(human, computer, cheat);
    // Check if it is the winning move
    if (computer.gameBoard.isGameOver()) {
      stopPlaying();
      await delay(500);
      alert('Game Over, you won!');
    }

    // Computer bombs the human player board
    human.getBombed();
    updateDisplay(human, computer, cheat);
    // Check if it is the winning move
    if (human.gameBoard.isGameOver()) {
      stopPlaying();
      await delay(500);
      alert('Game Over, you lost!');
    }
  });

  const cheatCheckbox = document.querySelector('#cheat');
  cheatCheckbox.addEventListener('change', () => {
    cheat = cheatCheckbox.checked;
    updateDisplay(human, computer, cheat);
  });
};
