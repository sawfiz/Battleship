import './style.css';
import { Player } from './players';
import { setupFleet } from '../src/fleetSetup';
import { game } from './game';

const human = Player('Tom', 'human');
const computer = Player('Jerry', 'computer');

setupFleet(human, computer).then(() => {
  console.log('Battleship');
  game(human, computer);
});
