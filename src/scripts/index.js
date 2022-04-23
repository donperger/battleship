import '../img/icons8-github.svg';
import '../styles/main.css';
import '../styles/gameboard.css';

import { Player, getRandomInt } from './player';
import Gameboard from './gameboard';
import {
  cleanOutBFContainer,
  displayAttack,
  displayGameboardGrid,
} from './dom';

let isPlayersTurn = true;

const player = Player('Human', true);
const computer = Player('Computer', false);
const playerGameboard = Gameboard();
const computerGameboard = Gameboard();

placeShipsRandomly(playerGameboard);
placeShipsRandomly(computerGameboard);
displayGameboardGrid(playerGameboard.displayGameboard(), 'player');
displayGameboardGrid(computerGameboard.displayGameboard(), 'enemy');

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
  });
});

enemyFields.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (isPlayersTurn && elem.textContent !== 'X') {
      const row = breakUpFieldId(elem).row;
      const column = breakUpFieldId(elem).column;

      player.attackGameboard(computerGameboard, row, column);
      displayAttack(elem);

      isPlayersTurn = false;
    }
  });
});

function placeShipsRandomly(gameboard) {
  const lengths = [2, 3, 3, 4, 5];

  lengths.forEach((elem) => {
    let placeData = generatePlaceData();
    let isShipPlaced = gameboard.placeShip(
      elem,
      placeData.row,
      placeData.column,
      placeData.direction
    );

    while (!isShipPlaced) {
      placeData = generatePlaceData();
      isShipPlaced = gameboard.placeShip(
        elem,
        placeData.row,
        placeData.column,
        placeData.direction
      );
    }
  });
}

function generatePlaceData() {
  const row = getRandomInt(10);
  const column = getRandomInt(10);
  const direction = getRandomInt(2) === 0 ? true : false;

  return { row, column, direction };
}

function breakUpFieldId(filed) {
  const filedNumber = Number(filed.id.split('-')[1]);
  const row = Math.floor(filedNumber / 10);
  const column = filedNumber - row * 10;

  return { row, column };
}
