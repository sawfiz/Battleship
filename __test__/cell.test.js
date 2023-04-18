import { Cell } from '../src/createCell';

it('Create a Cell', () => {
  const expected = {
    hasShip: false,
    isBombed: false,
    ship: null,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  const actual = Cell();
  expect(actual).toEqual(expected);
});

it('Place a carrier on a Cell', () => {
  const actual = Cell();
  const carrier = {
    type: 'carrier',
    size: 5,
    hit: expect.any(Function),
  }
  actual.placeShip(carrier);
  const expected = {
    hasShip: true,
    isBombed: false,
    ship: carrier,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  expect(actual).toEqual(expected);
});

it('Bomb an empty Cell', () => {
  const actual = Cell();
  actual.attack();
  const expected = {
    hasShip: false,
    isBombed: true,
    ship: null,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };
  expect(actual).toEqual(expected);
});

it('Bomb a Cell that has a carrier', () => {
  const actual = Cell();
  const carrier = {
    type: 'carrier',
    size: 5,
    hit: expect.any(Function),
  }
  actual.placeShip(carrier);
  actual.attack();
  const expected = {
    hasShip: true,
    isBombed: true,
    ship: carrier,
    placeShip: expect.any(Function),
    attack: expect.any(Function)
  };

  expect(actual).toEqual(expected);
});


