import './style.css';
import { Player } from './players';
import { deployFleet } from './deployFleet';
import { updateDisplay } from './dom';
import { game } from './game';

// Initialize players
const human = Player('Tom', 'human');
const computer = Player('Jerry', 'computer');

// Initialize display
human.gameBoard.initBoard();
computer.gameBoard.initBoard();
updateDisplay(human, computer);

// Deploy fleet then start the game
deployFleet(human).then(() => {
  game(human, computer);
});

// Todo: when cheating, can not click on the enemy ships