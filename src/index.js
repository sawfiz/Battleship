import './style.css';

import { GameBoard } from './gameBoard';

console.log('Battleship');

const gameBoard = GameBoard();
gameBoard.initBoard();
gameBoard.printBoard();

