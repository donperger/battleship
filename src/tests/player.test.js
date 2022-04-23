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
