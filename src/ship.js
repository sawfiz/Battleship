const sizes = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

export const ship = (type) => {
  const size = sizes[type];
  let hits = 0;
  let isSunk = false;

  return {
    size: size,
    hits: hits,
    isSunk: isSunk,
  };
};
