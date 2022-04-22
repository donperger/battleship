import Gameboard from '../scripts/gameboard';

const testGameboard = Gameboard();

test('Should display gameboard properly', () => {
  expect(testGameboard.displayGameboard().slice(0, 5)).toStrictEqual([
    0, 0, 0, 0, 0,
  ]);
  expect(testGameboard.displayGameboard().pop()).toBe(0);
});

test('Place ship horizontally', () => {
  testGameboard.placeShip(2, 1, 5, false);
  expect(testGameboard.displayGameboard().slice(14, 18)).toStrictEqual([
    0,
    'pb',
    'pb',
    0,
  ]);
});

test('Place ship vertically', () => {
  testGameboard.placeShip(3, 5, 2, true);
  expect(testGameboard.displayGameboard().slice(41, 44)).toStrictEqual([
    0, 0, 0,
  ]);
  expect(testGameboard.displayGameboard().slice(51, 54)).toStrictEqual([
    0,
    'sb',
    0,
  ]);
  expect(testGameboard.displayGameboard().slice(61, 64)).toStrictEqual([
    0,
    'sb',
    0,
  ]);
  expect(testGameboard.displayGameboard().slice(71, 74)).toStrictEqual([
    0,
    'sb',
    0,
  ]);
  expect(testGameboard.displayGameboard().slice(81, 84)).toStrictEqual([
    0, 0, 0,
  ]);
});

test(`Can't place horizontal ship on another one`, () => {
  expect(testGameboard.placeShip(3, 6, 1, false)).toBe(false);
});

test(`Can't place vertical ship on another one`, () => {
  expect(testGameboard.placeShip(3, 0, 5, true)).toBe(false);
});

test(`Can't place horizontal ship out of gameboard`, () => {
  expect(testGameboard.placeShip(3, 6, 9, false)).toBe(false);
});

test(`Can't place vertical ship out of gameboard`, () => {
  expect(testGameboard.placeShip(3, 9, 9, true)).toBe(false);
});

test(`Attack gameboard`, () => {
  testGameboard.receiveAttack(1, 6);
  expect(testGameboard.displayGameboard().slice(16, 17)).toStrictEqual([1]);
});

test('Attacked horizontal ship is damaged', () => {
  expect(testGameboard.displayShips().patrolBoat.displayShip()).toStrictEqual([
    'pb',
    1,
  ]);
});

test('Attack vertical ship is damaged', () => {
  testGameboard.receiveAttack(6, 2);
  expect(testGameboard.displayShips().submarine.displayShip()).toStrictEqual([
    'sb',
    1,
    'sb',
  ]);
});
