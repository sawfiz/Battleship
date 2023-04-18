import { BOARDSIZE } from './constants';
import createElement from './createElement';

function updateBoard(boardEl, board) {
  for (let i = 0; i < BOARDSIZE; i++) {
    for (let j = 0; j < BOARDSIZE; j++) {
      const cellEl = createElement('div', ['cell'], {}, '');
      boardEl.appendChild(cellEl);
      if (board[i][j].hasShip) {
        cellEl.innerText = 'S';
      }
      if (board[i][j].isBombed) {
        const bombEl = createElement('div', ['bombed']);
        cellEl.appendChild(bombEl);
        if (board[i][j].hasShip) {
          bombEl.classList.add('hit');
        } else {
          bombEl.classList.add('missed');
        }
      }
    }
  }
}

export const updateDisplay = (human, computer) => {
  console.log('🚀 ~ file: dom.js:17 ~ updateDisplay ~ human:', human);
  const computerBoardEl = document.querySelector('#computer-board');
  const humanBoardEl = document.querySelector('#human-board');

  computerBoardEl.innerHTML = '';
  humanBoardEl.innerHTML = '';

  updateBoard(computerBoardEl, computer.gameBoard.board);
  updateBoard(humanBoardEl, human.gameBoard.board);
};
