// Generates a random number 0-9
function getRandomNum() {
  return Math.floor(Math.random() * 10);
}

// Place a ship at a random location with a random direction
function placeShipRandom(gameBoard, type) {
  let row, col, direction;
  do {
    row = getRandomNum();
    col = getRandomNum();
    direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
  } while (!gameBoard.placeShip(type, row, col, direction));
}

// Place all 5 ships on an empty board
export function placeFleet(gameBoard) {
  gameBoard.initBoard();
  placeShipRandom(gameBoard, 'carrier');
  placeShipRandom(gameBoard, 'battleship');
  placeShipRandom(gameBoard, 'cruiser');
  placeShipRandom(gameBoard, 'submarine');
  placeShipRandom(gameBoard, 'destroyer');
}
