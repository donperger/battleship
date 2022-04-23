import '../img/icons8-github.svg';
import '../styles/main.css';
import '../styles/gameboard.css';

import { Player, getRandomInt } from './player';
import Gameboard from './gameboard';
import { displayGameboardGrid } from './dom';

const player = Player('Human', true);
const computer = Player('Computer', false);
const playerGameboard = Gameboard();
const computerGameboard = Gameboard();

placeShipsRandomly(playerGameboard);
placeShipsRandomly(computerGameboard);
displayGameboardGrid(playerGameboard.displayGameboard(), 'player');
displayGameboardGrid(computerGameboard.displayGameboard(), 'enemy');

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
