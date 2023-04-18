export const Cell = () => {
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
