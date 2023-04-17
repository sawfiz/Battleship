const sizes = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

export const createShip = (type) => {
  const size = sizes[type];
  let hits = 0;
  let isSunk = false;

  const hit = () => {
    hits++;
    if (hits >= size) isSunk = true;
  };

  return {
    size: size,
    hit,
    get hits() {
      return hits;
    },
    get isSunk() {
      return isSunk;
    },
  };
};
