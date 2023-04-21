import createElement from './createElement';
import { BOARDSIZE, FLEET, IMAGES } from './constants';
import { updateDisplay } from './dom';
import { placeFleet } from './deployRandomly';

const humanFleetContainerEl = document.querySelector('.human-fleet-container');
const humanBoardEl = document.querySelector('#human-board');

const deployShip = (ship, human) => {
  // Set up deploy ship side bar
  humanFleetContainerEl.innerHTML = '';
  const headingEl = createElement(
    'div',
    ['deploy-heading'],
    {},
    `Drag and drop to deploy your ${ship}`
  );
  humanFleetContainerEl.appendChild(headingEl);
  const shipContainerEl = createElement('div', ['ship-container']);
  const shipImage = createElement('img', ['ship-image'], { draggable: 'true' });
  shipImage.src = IMAGES[ship];
  // Each cell in the game board is 3vw
  shipImage.style.width = FLEET[ship].size * 3 + 'vw';
  let rotated = false;
  shipContainerEl.appendChild(shipImage);
  humanFleetContainerEl.appendChild(shipContainerEl);
  const rotateContainer = createElement('div', ['rotate-container']);
  const rotateBtn = createElement(
    'button',
    ['rotate-btn'],
    {},
    'Rotate ship 🔄'
  );
  rotateContainer.appendChild(rotateBtn);
  humanFleetContainerEl.appendChild(rotateContainer);

  // Button to toggle rotating of the ship
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
        // Todo: shipImage.style.transform = 'rotate(90deg)'
        // How to make the dragged ship image rotate by 90 deg too?
        shipImage.style.height = FLEET[ship].size * 3 + 'vw';
        // shipImage.style.height = '3vw'
        // Get the location of the mouse relative to the image
        const rect = shipImage.getBoundingClientRect();
        const yOffset = event.clientY - rect.top;
        rowOffset = Math.floor(yOffset / ((3 / 100) * window.innerWidth));
      }
    };

    const onDragOver = (event) => {
      // Get the location and size of the board
      const rect = humanBoardEl.getBoundingClientRect();
      // The Grid is 10 x 10
      const cellWidth = rect.width / BOARDSIZE;
      const cellHeight = rect.width / BOARDSIZE;
      const col = Math.floor((event.clientX - rect.left) / cellWidth);
      const row = Math.floor((event.clientY - rect.top) / cellHeight);

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
      // Todo: This does not seem to work
      // The intention is so that the ship does not zoom back once it is placed
      shipImage.remove();

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

export const deployFleet = (human) => {
  return new Promise((resolve) => {

    const startGameMsg =() => {
      const turnEl = document.querySelector('.turn');
      turnEl.innerHTML = '';
      turnEl.innerText = 'Start bombing the enemy waters, now!';
    }

    const deployRandomBtn = document.querySelector('#random-deploy');
    deployRandomBtn.addEventListener('click', () => {
      humanFleetContainerEl.innerHTML = '';
      placeFleet(human.gameBoard);
      startGameMsg();
      resolve();
    });

    deployShip('carrier', human).then(() => {
      deployShip('battleship', human).then(() => {
        deployShip('cruiser', human).then(() => {
          deployShip('submarine', human).then(() => {
            deployShip('destroyer', human).then(() => {
              humanFleetContainerEl.innerHTML = '';
              startGameMsg();
              resolve();
            });
          });
        });
      });
    });
  });
};
