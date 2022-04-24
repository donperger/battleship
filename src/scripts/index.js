import '../img/icons8-github.svg';
import '../styles/main.css';
import '../styles/gameboard.css';
import '../styles/winner.css';

import { Player, getRandomInt } from './player';
import Gameboard from './gameboard';
import {
  cleanOutBFContainer,
  displayAttack,
  displayGameboardGrid,
  displayWinner,
} from './dom';

let isPlayersTurn = true;

const player = Player('Human', true);
const computer = Player('Computer', false);
const playerGameboard = Gameboard();
const enemyGameboard = Gameboard();

playerGameboard.placeShipsRandomly();
enemyGameboard.placeShipsRandomly();

displayGameboardGrid(playerGameboard.displayGameboard(), 'player');
displayGameboardGrid(enemyGameboard.displayGameboard(), 'enemy');

const playerFields = document.querySelectorAll('.player-field');
const enemyFields = document.querySelectorAll('.enemy-field');

playerFields.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (!isPlayersTurn && elem.textContent !== 'X') {
      const row = breakUpFieldId(elem).row;
      const column = breakUpFieldId(elem).column;

      computer.attackGameboard(playerGameboard, row, column);
      displayAttack(elem);

      isPlayersTurn = true;
    }

    if (playerGameboard.isFleetDestroyed()) {
      displayWinner(computer.name);
    }
  });
});

enemyFields.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (isPlayersTurn && elem.textContent !== 'X') {
      const row = breakUpFieldId(elem).row;
      const column = breakUpFieldId(elem).column;

      player.attackGameboard(enemyGameboard, row, column);
      displayAttack(elem);

      isPlayersTurn = false;
    }

    if (enemyGameboard.isFleetDestroyed()) {
      displayWinner(player.name);
    }
  });
});

function breakUpFieldId(filed) {
  const filedNumber = Number(filed.id.split('-')[1]);
  const row = Math.floor(filedNumber / 10);
  const column = filedNumber - row * 10;

  return { row, column };
}
