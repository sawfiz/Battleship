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

const setupShip = (ship) => {
  let placed = false;
  const headingEl = createElement('div', [], {}, `Place your ${ship}`);
  humanFleetContainerEl.appendChild(headingEl);
  const shipContainerEl = createElement('div', ['ship-container']);
  const shipImage = createElement('img');
  shipImage.src = images[ship];
  shipImage.style.width = FLEET[ship].size * 2 + 'vw';
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
    if (placed) {
      console.log('5 seconds delay in setupShip()');
      resolve();
    }
  });
};

export const setupFleet = (human, computer) => {
  human.gameBoard.initBoard();
  computer.gameBoard.initBoard();
  updateDisplay(human, computer);
  return new Promise((resolve) => {
    setupShip('carrier').then(async () => {
      await delay(5000);
      console.log('5 seconds delay in setupFleet()');
      resolve();
    });
  });
};
