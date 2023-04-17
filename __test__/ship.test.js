import { createShip } from '../src/createShip';

it('Create a carrier', () => {
  const expected = {
    size: 5,
    hits: 0,
    isSunk: false,
    hit: expect.any(Function)
  };
  const actual = createShip('carrier');
  expect(actual).toEqual(expected);
});

it('Create a Battleship', () => {
  const expected = {
    size: 4,
    hits: 0,
    isSunk: false,
    hit: expect.any(Function)
  };
  const actual = createShip('battleship');
  expect(actual).toEqual(expected);
});

it('Create a cruiser', () => {
  const expected = {
    size: 3,
    hits: 0,
    isSunk: false,
    hit: expect.any(Function)
  };
  const actual = createShip('cruiser');
  expect(actual).toEqual(expected);
});

it('Create a submarine', () => {
  const expected = {
    size: 3,
    hits: 0,
    isSunk: false,
    hit: expect.any(Function)
  };
  const actual = createShip('submarine');
  expect(actual).toEqual(expected);
});

it('Create a destroyer', () => {
  const expected = {
    size: 2,
    hits: 0,
    isSunk: false,
    hit: expect.any(Function)
  };
  const actual = createShip('destroyer');
  expect(actual).toEqual(expected);
});

it('Sink a destroyer', () => {
  const expected = {
    size: 2,
    hits: 2,
    isSunk: true,
    hit: expect.any(Function)
  };
  const actual = createShip('destroyer');
  actual.hit()
  actual.hit()
  expect(actual).toEqual(expected);
});


