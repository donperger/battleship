import { Player } from '../scripts/player';
import Gameboard from '../scripts/gameboard';

const testHumanPlayer = Player('test', true);
const testCompPlayer = Player('robot', false);
const testGameboard = Gameboard();

test('Create player with a name', () => {
  expect(testHumanPlayer.name).toBe('test');
  expect(testHumanPlayer.comp).toBe(false);
});

test('Create a computer player', () => {
  expect(testCompPlayer.name).toBe('robot');
  expect(testCompPlayer.comp).toBe(true);
});

test('Player can attack a gameboard', () => {
  testHumanPlayer.attackGameboard(testGameboard, 0, 5);
  expect(testGameboard.displayAttacks().slice(4, 7)).toStrictEqual([0, 1, 0]);
});

test('Computer can attack a gameboard', () => {
  const aiAttackField = testCompPlayer.aiAttack(testGameboard);
  const to = aiAttackField + 1;
  expect(testGameboard.displayAttacks().slice(aiAttackField, to)).toStrictEqual(
    [1]
  );
});

test(`Players can't attack an attacked field`, () => {
  expect(testCompPlayer.attackGameboard(testGameboard, 0, 5)).toBe(false);
});

test('AI attacks next field if the last attack was a hit', () => {
  testGameboard.placeShip(3, 4, 1, false);
  expect(testGameboard.displayGameboard().slice(40, 45)).toStrictEqual([
    0,
    'sb',
    'sb',
    'sb',
    0,
  ]);
  testCompPlayer.attackGameboard(testGameboard, 4, 2);
  expect(testGameboard.displayAttacks().slice(40, 45)).toStrictEqual([
    0, 0, 1, 0, 0,
  ]);
  expect(
    [41, 42, 32, 52].includes(testCompPlayer.aiAttack(testGameboard))
  ).toBeTruthy();
});
