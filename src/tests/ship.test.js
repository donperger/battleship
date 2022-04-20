import Ship from '../scripts/ship';

const testShip = Ship(2, 'pb');

test('Display ship', () => {
  expect(testShip.displayShip()).toStrictEqual(['pb', 'pb']);
});

test('Hit a ship', () => {
  testShip.hit(1);
  expect(testShip.displayShip()).toStrictEqual(['pb', 1]);
});

test(`Ship is not sunk, when it has undamaged field`, () => {
  expect(testShip.isSunk()).toBe(false);
});

test('Can a ship sink?', () => {
  testShip.hit(0);
  expect(testShip.isSunk()).toBe(true);
});
