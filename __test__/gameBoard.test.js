import { GameBoard } from '../src/gameBoard';

it('Place a carrier at (0,0) horizontally', () => {
  const gameBoard = GameBoard();
  gameBoard.initBoard();
  gameBoard.placeShip('carrier', 0, 0, 'horizontal');
  expect(gameBoard.board[0][0].hasShip).toBe(true);
  expect(gameBoard.board[0][1].hasShip).toBe(true);
  expect(gameBoard.board[0][2].hasShip).toBe(true);
  expect(gameBoard.board[0][3].hasShip).toBe(true);
  expect(gameBoard.board[0][4].hasShip).toBe(true);
  expect(gameBoard.board[0][5].hasShip).toBe(false);
  expect(gameBoard.board[1][0].hasShip).toBe(false);
});

it('Place a carrier at (0,6) horizontally', () => {
  const gameBoard = GameBoard();
  gameBoard.initBoard();
  expect(() => gameBoard.placeShip('carrier', 0, 6, 'horizontal')).toThrow('Invalid col to place a ship')
});

it('Place a carrier at (0,0) vertically', () => {
  const gameBoard = GameBoard();
  gameBoard.initBoard();
  gameBoard.placeShip('carrier', 0, 0, 'vertical');
  expect(gameBoard.board[0][0].hasShip).toBe(true);
  expect(gameBoard.board[1][0].hasShip).toBe(true);
  expect(gameBoard.board[2][0].hasShip).toBe(true);
  expect(gameBoard.board[3][0].hasShip).toBe(true);
  expect(gameBoard.board[4][0].hasShip).toBe(true);
  expect(gameBoard.board[0][1].hasShip).toBe(false);
  expect(gameBoard.board[1][1].hasShip).toBe(false);
});

it('Place a carrier at (6,0) vertically', () => {
  const gameBoard = GameBoard();
  gameBoard.initBoard();
  expect(() => gameBoard.placeShip('carrier', 6, 0, 'vertical')).toThrow('Invalid row to place a ship')
});


it('Place a carrier at (0,0) horizontally, bomb it, until it is sunk', () => {
  const gameBoard = GameBoard();
  gameBoard.initBoard();
  gameBoard.placeShip('carrier', 0, 0, 'horizontal');
  expect(gameBoard.placeBomb(0, 0)).toBe(true)
  expect(() => gameBoard.placeBomb(0, 0)).toThrow('This location has already been bombed')
  expect(gameBoard.placeBomb(0, 1)).toBe(true)
  expect(gameBoard.board[0][1].ship.hits).toBe(2)
  expect(gameBoard.board[0][1].ship.isSunk).toBe(false)
  expect(gameBoard.placeBomb(0, 2)).toBe(true)
  expect(gameBoard.placeBomb(0, 3)).toBe(true)
  expect(gameBoard.board[0][1].ship.hits).toBe(4)
  expect(gameBoard.board[0][1].ship.isSunk).toBe(false)
  expect(gameBoard.placeBomb(0, 4)).toBe(true)
  expect(gameBoard.board[0][1].ship.hits).toBe(5)
  expect(gameBoard.board[0][1].ship.isSunk).toBe(true)
  expect(gameBoard.placeBomb(0, 5)).toBe(false)
});