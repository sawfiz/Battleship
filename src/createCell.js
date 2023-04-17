export const Cell = () => {
  let hasShip = false;
  let isBombed = false;

  const placeShip = () => {
    hasShip = true;
  };

  const attack = () => {
    isBombed = true;
  };

  return {
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
