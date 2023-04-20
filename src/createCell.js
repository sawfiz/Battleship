export const Cell = (row, col) => {
  let ship = null;
  let hasShip = false;
  let isBombed = false;

  const placeShip = (obj) => {
    hasShip = true;
    ship = obj;
  };

  const attack = () => {
    isBombed = true;
  };

  return {
    row,
    col,
    get ship() {
      return ship;
    },
    get hasShip() {
      return hasShip;
    },
    get isBombed() {
      return isBombed;
    },
    placeShip,
    attack,
  };
};
