import { BOARDSIZE } from './constants';
import createElement from './createElement';
import carrierImage from './images/carrier.svg';
import battleshipImage from './images/battleship.svg';
import cruiserImage from './images/cruiser.svg';
import submarineImage from './images/submarine.svg';
import destroyerImage from './images/destroyer.svg';

const images = {
  carrier: carrierImage,
  battleship: battleshipImage,
  cruiser: cruiserImage,
  submarine: submarineImage,
  destroyer: destroyerImage,
};

function updateBoard(boardEl, board, show) {
  for (let i = 0; i < BOARDSIZE; i++) {
    for (let j = 0; j < BOARDSIZE; j++) {
      const cell = board[i][j];
      const cellEl = createElement(
        'div',
        ['cell'],
        { 'data-row': i, 'data-col': j, style: 'cursor: pointer' },
        ''
      );
      boardEl.appendChild(cellEl);
      // Cheat, show the ship locations
      if (show) {
        if (cell.hasShip) {
          cellEl.classList.add('show');
          // cellEl.innerText = board[i][j].ship.type[0];
          const img = createElement('img', ['image']);
          img.src = images[cell.ship.type];
          img.style.height = '4vw';
          img.style.width = 3 * cell.ship.size + 'vw';
          if (cell.direction === 'vertical') {
            img.style.transform = `rotate(90deg)`;
            img.style.top =
              (cell.ship.size / 2 - cell.section - 0.5) * 3 + 'vw';
          } else {
            img.style.left = -cell.section * 3 + 'vw';
          }
          cellEl.appendChild(img);
        }
      }
      if (cell.isBombed) {
        cellEl.style.pointerEvents = 'none';
        // cellEl.style.zIndex = 10;
        // cellEl.style.cursor = 'not-allowed';

        const bombEl = createElement('div', ['marker']);
        cellEl.appendChild(bombEl);
        if (cell.hasShip) {
          console.log(i, j, 'hit!');
          bombEl.classList.add('hit');
        } else {
          bombEl.classList.add('missed');
        }
      }
    }
  }
}

export const updateDisplay = (human, computer, cheat) => {
  const computerBoardEl = document.querySelector('#computer-board');
  const humanBoardEl = document.querySelector('#human-board');

  computerBoardEl.innerHTML = '';
  humanBoardEl.innerHTML = '';

  const show = true;
  updateBoard(computerBoardEl, computer.gameBoard.board, cheat);
  updateBoard(humanBoardEl, human.gameBoard.board, show);
};
