import { BOARDSIZE } from './constants';
import createElement from './createElement';

function updateBoard(boardEl, board) {
  for (let i = 0; i < BOARDSIZE; i++) {
    for (let j = 0; j < BOARDSIZE; j++) {
      const cellEl = createElement(
        'div',
        ['cell'],
        { 'data-row': i, 'data-col': j, style: 'cursor: pointer' },
        ''
      );
      boardEl.appendChild(cellEl);
      if (board[i][j].hasShip) {
        cellEl.innerText = board[i][j].ship.type[0];
      }
      if (board[i][j].isBombed) {
        cellEl.style.pointerEvents = 'none';
        cellEl.style.cursor = 'not-allowed';
   
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
  const computerBoardEl = document.querySelector('#computer-board');
  const humanBoardEl = document.querySelector('#human-board');

  computerBoardEl.innerHTML = '';
  humanBoardEl.innerHTML = '';

  updateBoard(computerBoardEl, computer.gameBoard.board);
  updateBoard(humanBoardEl, human.gameBoard.board);
};
