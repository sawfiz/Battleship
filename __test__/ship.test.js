import { ship } from '../src/ship';

it('Create a carrier', () => {
  const expected = {
    size: 5,
    hits: 0,
    isSunk: false,
  };
  const actual = ship('carrier');
  expect(actual).toEqual(expected);
});

it('Create a Battleship', () => {
  const expected = {
    size: 4,
    hits: 0,
    isSunk: false,
  };
  const actual = ship('battleship');
  expect(actual).toEqual(expected);
});

it('Create a cruiser', () => {
  const expected = {
    size: 3,
    hits: 0,
    isSunk: false,
  };
  const actual = ship('cruiser');
  expect(actual).toEqual(expected);
});

it('Create a submarine', () => {
  const expected = {
    size: 3,
    hits: 0,
    isSunk: false,
  };
  const actual = ship('submarine');
  expect(actual).toEqual(expected);
});

it('Create a destroyer', () => {
  const expected = {
    size: 2,
    hits: 0,
    isSunk: false,
  };
  const actual = ship('destroyer');
  expect(actual).toEqual(expected);
});
