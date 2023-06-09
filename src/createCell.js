export const Cell = (row, col) => {
  let ship = null;
  let hasShip = false;
  let isBombed = false;
  let section;
  let direction;
  let draggedOver = false;

  const placeShip = (obj, index, dir) => {
    hasShip = true;
    ship = obj;
    section = index;
    direction = dir;
  };

  const attack = () => {
    isBombed = true;
  };

  return {
    row,
    col,
    get section() {
      return section;
    },
    get direction () {
      return direction;
    },
    get ship() {
      return ship;
    },
    get hasShip() {
      return hasShip;
    },
    get isBombed() {
      return isBombed;
    },
    set draggedOver (value) {
      draggedOver = value;
    },
    get draggedOver() {
      return draggedOver;
    },
    placeShip,
    attack,
  };
};
