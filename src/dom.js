import { BOARDSIZE, IMAGES } from './constants';
import createElement from './createElement';

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

      // Show if a cell is being dragged over when deploying ships
      if (cell.draggedOver) {
        cellEl.classList.add('draggedOver');
        if (cell.hasShip) {
          cellEl.classList.remove('draggedOver');
          cellEl.classList.add('draggedOver-red');
        }
      }

      // For human player, show the ship deployment
      // Also used when cheating, to show the enemy deployment
      if (show) {
        if (cell.hasShip) {
          cellEl.classList.add('show');
          // cellEl.innerText = board[i][j].ship.type[0];
          const img = createElement('img', ['image']);
          img.src = IMAGES[cell.ship.type];
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

      // Show if a location has been bombed, and if hit or miss
      if (cell.isBombed) {
        cellEl.style.pointerEvents = 'none';
        const bombEl = createElement('div', ['bomb']);
        cellEl.appendChild(bombEl);
        if (cell.hasShip) {
          bombEl.classList.add('hit');
        } else {
          bombEl.classList.add('missed');
        }
      }
    }
  }
}

const updateDisplay = (human, computer, cheat) => {
  const computerBoardEl = document.querySelector('#computer-board');
  const humanBoardEl = document.querySelector('#human-board');

  // Always show human player fleet
  humanBoardEl.innerHTML = '';
  const show = true;
  updateBoard(humanBoardEl, human.gameBoard.board, show);

  // During deployment stage, no need to refresh computer board
  if (computer) {
    computerBoardEl.innerHTML = '';
    // Show computer deployment if cheating
    updateBoard(computerBoardEl, computer.gameBoard.board, cheat);
  }
};

const updateTurn = (turn) => {
  const turnEl = document.querySelector('.turn');
  turnEl.innerHTML = '';
  turnEl.innerText = `Turn: ${turn}`;
}

const updateScores = (human, computer) => {
  const computerFleetContainerEl = document.querySelector('.computer-fleet-container')
  computerFleetContainerEl.innerHTML = ''
  const div1 = createElement('div')
  computerFleetContainerEl.appendChild(div1)
  const computerHitsEl = createElement('div',['total-hits'])
  computerHitsEl.innerText = `Hits: ${computer.gameBoard.totalHits}`
  computerFleetContainerEl.appendChild(computerHitsEl)
  const computerMissesEl = createElement('div', ['total-misses'])
  computerMissesEl.innerText = `Misses: ${computer.gameBoard.totalMisses}`
  computerFleetContainerEl.appendChild(computerMissesEl)

  const humanFleetContainerEl = document.querySelector('.human-fleet-container')
  humanFleetContainerEl.innerHTML = ''
  const div2 = createElement('div')
  humanFleetContainerEl.appendChild(div2)
  const humanHitsEl = createElement('div',['total-hits'])
  humanHitsEl.innerText = `Hits: ${human.gameBoard.totalHits}`
  humanFleetContainerEl.appendChild(humanHitsEl)
  const humanMissesEl = createElement('div', ['total-misses'])
  humanMissesEl.innerText = `Misses: ${human.gameBoard.totalMisses}`
  humanFleetContainerEl.appendChild(humanMissesEl) 
}

const stopPlaying = () => {
  // const humanBoardEl = document.querySelector('#human-board');
  // humanBoardEl.style.pointerEvents = 'none';
  // document.addEventListener('click', (e) => e.preventDefault());
  location.reload()
};

export { updateDisplay, updateTurn, updateScores, stopPlaying };
