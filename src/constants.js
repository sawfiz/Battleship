import carrierImage from './images/carrier.svg';
import battleshipImage from './images/battleship.svg';
import cruiserImage from './images/cruiser.svg';
import submarineImage from './images/submarine.svg';
import destroyerImage from './images/destroyer.svg';

import rotatedCarrierImage from './images/carrier-rotated.svg';
import rotatedBattleshipImage from './images/battleship-rotated.svg';
import rotatedCruiserImage from './images/cruiser-rotated.svg';
import rotatedSubmarineImage from './images/submarine-rotated.svg';
import rotatedDestroyerImage from './images/destroyer-rotated.svg';

const BOARDSIZE = 10;

const FLEET = {
  carrier: { size: 5 },
  battleship: { size: 4 },
  cruiser: { size: 3 },
  submarine: { size: 3 },
  destroyer: { size: 2 },
};

const IMAGES = {
  carrier: carrierImage,
  battleship: battleshipImage,
  cruiser: cruiserImage,
  submarine: submarineImage,
  destroyer: destroyerImage,
};

const ROTATEDIMAGES = {
  carrier: rotatedCarrierImage,
  battleship: rotatedBattleshipImage,
  cruiser: rotatedCruiserImage,
  submarine: rotatedSubmarineImage,
  destroyer: rotatedDestroyerImage,
};


export {BOARDSIZE, FLEET, IMAGES, ROTATEDIMAGES}
