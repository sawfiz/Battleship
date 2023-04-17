import { Cell } from '../src/createCell';

it('Create a Cell', () => {
  const expected = {
    hasShip: false,
    isBombed: false,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  const actual = Cell();
  expect(actual).toEqual(expected);
});

it('Place a ship on a Cell', () => {
  const expected = {
    hasShip: true,
    isBombed: false,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  const actual = Cell();
  actual.placeShip();
  expect(actual).toEqual(expected);
});

it('Bomb a Cell', () => {
  const expected = {
    hasShip: false,
    isBombed: true,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  const actual = Cell();
  actual.attack();
  expect(actual).toEqual(expected);
});

it('Bomb a Cell that has a ship', () => {
  const expected = {
    hasShip: true,
    isBombed: true,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  const actual = Cell();
  actual.placeShip()
  actual.attack();
  expect(actual).toEqual(expected);
});


