import { BOARDSIZE } from './constants';
import delay from './delay';
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

const humanBoardContainerEl = document.querySelector('.human-board-container');
const humanFleetContainerEl = document.querySelector('.human-fleet');

const setupShip = async (ship) => {
  await delay(5000);
  const headingEl = createElement('div', [], {}, `Place your ${ship}`);
  humanFleetContainerEl.appendChild(headingEl);
  return new Promise( (resolve) => {
    console.log('5 seconds delay in setupShip()');
    resolve();
  });
};

export const setupFleet = () => {
  return new Promise((resolve) => {
    setupShip('carrier').then(async () => {
      await delay(5000);
      console.log('5 seconds delay in setupFleet()');
      resolve();
    });
  });
};
