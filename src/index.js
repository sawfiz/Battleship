import './style.css';
import { setupFleet } from '../src/fleetSetup';
import { game } from './game';

setupFleet().then(() => {
  console.log('Battleship');
  game();
});
