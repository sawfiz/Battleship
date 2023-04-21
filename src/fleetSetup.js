import { BOARDSIZE } from './constants';
import delay from './delay';
import { updateDisplay } from './dom';

import createElement from './createElement';
import carrierImage from './images/carrier.svg';
import battleshipImage from './images/battleship.svg';
import cruiserImage from './images/cruiser.svg';
import submarineImage from './images/submarine.svg';
import destroyerImage from './images/destroyer.svg';

const FLEET = {
  carrier: { size: 5 },
  battleship: { size: 4 },
  cruiser: { size: 3 },
  submarine: { size: 3 },
  destroyer: { size: 2 },
};

const images = {
  carrier: carrierImage,
  battleship: battleshipImage,
  cruiser: cruiserImage,
  submarine: submarineImage,
  destroyer: destroyerImage,
};

const humanBoardContainerEl = document.querySelector('.human-board-container');
const humanFleetContainerEl = document.querySelector('.human-fleet-container');
const humanBoardEl = document.querySelector('#human-board');

const setupShip = (ship, human) => {
  humanFleetContainerEl.innerHTML = '';
  const headingEl = createElement(
    'div',
    ['place-ship'],
    {},
    `Place your ${ship}`
  );
  humanFleetContainerEl.appendChild(headingEl);
  const shipContainerEl = createElement('div', ['ship-container']);
  const shipImage = createElement('img', [], { draggable: 'true' });
  shipImage.src = images[ship];
  shipImage.style.width = FLEET[ship].size * 3 + 'vw';
  let rotated = false;
  shipContainerEl.appendChild(shipImage);
  humanFleetContainerEl.appendChild(shipContainerEl);
  const rotateContainer = createElement('div', ['rotate-container']);
  const rotateBtn = createElement('button', ['rotate-btn'], {}, 'Rotate');
  rotateContainer.appendChild(rotateBtn);
  humanFleetContainerEl.appendChild(rotateContainer);

  rotateBtn.addEventListener('click', () => {
    if (!rotated) {
      shipImage.style.transform = 'rotate(90deg)';
    } else {
      shipImage.style.transform = 'rotate(0deg)';
    }
    rotated = !rotated;
  });

  return new Promise((resolve) => {
    let rowOffset = 0;
    let colOffset = 0;

    let startRow, startCol;

    const onDragStart = (event) => {
      if (!rotated) {
        // The ship is horizontal
        shipImage.style.width = FLEET[ship].size * 3 + 'vw';
        // shipImage.style.height = '3vw'
        // Get the location of the mouse relative to the image
        const rect = shipImage.getBoundingClientRect();
        const xOffset = event.clientX - rect.left;
        colOffset = Math.floor(xOffset / ((3 / 100) * window.innerWidth));
      } else {
        // shipImage.style.transform = 'rotate(90deg)'
        shipImage.style.height = FLEET[ship].size * 3 + 'vw';
        // shipImage.style.height = '3vw'
        // Get the location of the mouse relative to the image
        const rect = shipImage.getBoundingClientRect();
        const yOffset = event.clientY - rect.top;
        console.log(
          '🚀 ~ file: fleetSetup.js:79 ~ onDragStart ~ yOffset:',
          yOffset
        );
        rowOffset = Math.floor(yOffset / ((3 / 100) * window.innerWidth));
        console.log(
          '🚀 ~ file: fleetSetup.js:80 ~ onDragStart ~ rowOffset:',
          rowOffset
        );
      }
    };

    const onDragOver = (event) => {
      // event.preventDefault();

      // Get the location and size of the board
      const rect = humanBoardEl.getBoundingClientRect();
      // The Grid is 10 x 10
      const cellWidth = rect.width / 10;
      const cellHeight = rect.width / 10;
      const col = Math.floor((event.clientX - rect.left) / cellWidth);
      const row = Math.floor((event.clientY - rect.top) / cellHeight);
      console.log(row, col);

      if (!rotated) {
        startCol = col - colOffset;
        startRow = row < 0 ? 0 : row;
        if (startCol < 0) startCol = 0;
        if (startCol > 9 - FLEET[ship].size)
          startCol = 9 - FLEET[ship].size + 1;
        for (let i = 0; i < FLEET[ship].size; i++) {
          if (startCol + i < 10) {
            human.gameBoard.board[startRow][startCol + i].draggedOver = true;
          }
        }
        updateDisplay(human);
        for (let i = 0; i < FLEET[ship].size; i++) {
          if (startCol + i < 10) {
            human.gameBoard.board[startRow][startCol + i].draggedOver = false;
          }
        }
      } else {
        startCol = col < 0 ? 0 : col;
        startRow = row - rowOffset < 0 ? 0 : row - rowOffset;
        if (startRow < 0) startRow = 0;
        if (startRow > 9 - FLEET[ship].size)
          startRow = 9 - FLEET[ship].size + 1;
        for (let i = 0; i < FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = true;
          }
        }
        updateDisplay(human);
        for (let i = 0; i < FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = false;
          }
        }
      }
    };

    const onDragEnd = () => {
      console.log('dragend');
      const direction = rotated ? 'vertical' : 'horizontal';
      human.gameBoard.placeShip(ship, startRow, startCol, direction);
      updateDisplay(human);
      resolve();
    };

    shipImage.addEventListener('dragstart', onDragStart);
    humanBoardEl.addEventListener('dragover', onDragOver);
    shipImage.addEventListener('dragend', onDragEnd);
  });
};

export const setupFleet = (human, computer) => {
  human.gameBoard.initBoard();
  computer.gameBoard.initBoard();
  updateDisplay(human, computer);
  return new Promise((resolve) => {
    setupShip('carrier', human).then(() => {
      setupShip('battleship', human).then(() => {
        setupShip('cruiser', human).then(() => {
          setupShip('submarine', human).then(() => {
            setupShip('destroyer', human).then(() => {
              humanFleetContainerEl.innerHTML = ''
              resolve();
            });
          });
        });
      });
    });
  });
};
