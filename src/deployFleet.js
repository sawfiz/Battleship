import createElement from './createElement';
import { BOARDSIZE, FLEET, IMAGES, ROTATEDIMAGES } from './constants';
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
  const deployMsg = createElement('div', ['deploy-failed']);
  humanFleetContainerEl.appendChild(deployMsg);

  // Button to toggle rotating of the ship
  rotateBtn.addEventListener('click', () => {
    if (!rotated) {
      // shipImage.style.transform = 'rotate(90deg)';
      shipImage.src = ROTATEDIMAGES[ship];
    } else {
      // shipImage.style.transform = 'rotate(0deg)';
      shipImage.src = IMAGES[ship];
    }
    rotated = !rotated;
  });

  return new Promise((resolve) => {
    let rowOffset = 0;
    let colOffset = 0;
    let startRow, startCol;
    let prevRow, prevCol;

    const onDragStart = () => {
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
      // Need the following line to prevent the ship to zoom back to it's
      // original location after dragEnd
      event.preventDefault();

      // Get the location and size of the board
      const rect = humanBoardEl.getBoundingClientRect();
      // The Grid is 10 x 10
      const cellWidth = rect.width / BOARDSIZE;
      const cellHeight = rect.width / BOARDSIZE;
      const col = Math.floor((event.clientX - rect.left) / cellWidth);
      const row = Math.floor((event.clientY - rect.top) / cellHeight);
      if (row !== prevRow || col !== prevCol) {
        // Only refresh the screen if the ship is dragged to a different cell
        prevRow = row;
        prevCol = col;

        if (!rotated) {
          // The dragged ship is horizontal
          startCol = col - colOffset;
          startRow = row < 0 ? 0 : row;

          // Confine the ship inside the board
          if (startCol < 0) startCol = 0;
          if (startCol > 9 - FLEET[ship].size)
            startCol = 9 - FLEET[ship].size + 1;

          // Set draggedOver to true, so the cell is green when updateDisplay  
          for (let i = 0; i < FLEET[ship].size; i++) {
            if (startCol + i < 10) {
              human.gameBoard.board[startRow][startCol + i].draggedOver = true;
            }
          }
          updateDisplay(human);

          // Reset draggedOver so there is not a trial of green cells when the ship moves
          for (let i = 0; i < FLEET[ship].size; i++) {
            if (startCol + i < 10) {
              human.gameBoard.board[startRow][startCol + i].draggedOver = false;
            }
          }
        } else {
          // The ship dragged is vertical
          startCol = col < 0 ? 0 : col;
          startRow = row - rowOffset < 0 ? 0 : row - rowOffset;

          // Confine the ship inside the board
          if (startRow < 0) startRow = 0;
          if (startRow > 9 - FLEET[ship].size)
            startRow = 9 - FLEET[ship].size + 1;

          // Set draggedOver to true, so the cell is green when updateDisplay  
          for (let i = 0; i < FLEET[ship].size; i++) {
            if (startRow + i < 10) {
              human.gameBoard.board[startRow + i][startCol].draggedOver = true;
            }
          }
          updateDisplay(human);

          // Reset draggedOver so there is not a trial of green cells when the ship moves
          for (let i = 0; i < FLEET[ship].size; i++) {
            if (startRow + i < 10) {
              human.gameBoard.board[startRow + i][startCol].draggedOver = false;
            }
          }
        }
      }
    };

    const onDragEnd = () => {
      const direction = rotated ? 'vertical' : 'horizontal';
      // Check if a ship is successfully deployed
      if (human.gameBoard.placeShip(ship, startRow, startCol, direction)) {
        // If yes, we are done here
        updateDisplay(human);
        resolve();
      } else {
        // If no, display error message and clear the dragged over cells
        deployMsg.innerText = 'Failed to deploy!  Try again.';
        for (let i = 0; i < FLEET[ship].size; i++) {
          if (startRow + i < 10) {
            human.gameBoard.board[startRow + i][startCol].draggedOver = false;
          }
        }
        updateDisplay(human);
      }
    };

    // Drag and drop event listeners
    shipImage.addEventListener('dragstart', onDragStart);
    humanBoardEl.addEventListener('dragover', onDragOver);
    shipImage.addEventListener('dragend', onDragEnd);
  });
};

export const deployFleet = (human) => {
  return new Promise((resolve) => {
    // Function called at the end of successful fleet deployment
    const startGameMsg = () => {
      const turnEl = document.querySelector('.turn');
      turnEl.innerHTML = '';
      turnEl.innerText = 'Attack the enemy waters, now!';
    };

    // Button to all fleet to be randomly deployed
    const deployRandomBtn = document.querySelector('#random-deploy');
    deployRandomBtn.addEventListener('click', () => {
      humanFleetContainerEl.innerHTML = '';
      placeFleet(human.gameBoard);
      startGameMsg();
      resolve();
    });

    // Manual deployment of fleet
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
