import '../img/icons8-github.svg';
import '../styles/main.css';
import '../styles/gameboard.css';
import '../styles/winner.css';
import '../styles/ship-list.css';

import { Player } from './player';
import Gameboard from './gameboard';
import {
  displayAttack,
  displayGameboardGrid,
  displayShipList,
  displayWinner,
} from './dom';

let isPlayersTurn = true;

setUpGame('Human', 'Computer', false);

function setUpGame(player1Name, player2Name, isPlayer2Human) {
  isPlayersTurn = true;

  const player = Player(player1Name, true);
  const enemy = Player(player2Name, isPlayer2Human);
  const playerGameboard = Gameboard();
  const enemyGameboard = Gameboard();

  playerGameboard.placeShipsRandomly();
  enemyGameboard.placeShipsRandomly();

  displayGameboardGrid(playerGameboard.displayGameboard(), 'player');
  displayGameboardGrid(enemyGameboard.displayGameboard(), 'enemy');

  displayShipList();

  const playerFields = document.querySelectorAll('.player-field');
  const enemyFields = document.querySelectorAll('.enemy-field');

  enemyFields.forEach((elem) => {
    elem.style.cursor = 'pointer';

    elem.addEventListener('click', () => {
      if (isPlayersTurn) {
        const row = breakUpFieldId(elem).row;
        const column = breakUpFieldId(elem).column;

        const isAttackTookPlace = player.attackGameboard(
          enemyGameboard,
          row,
          column
        );
        if (isAttackTookPlace) {
          const attackedField = row * 10 + column;
          const hitReport = reportHit(enemyGameboard, attackedField);
          displayAttack(elem, hitReport);

          isPlayersTurn = false;

          if (enemyGameboard.isFleetDestroyed()) {
            displayWinner(player.name);
          }
        }
      }

      if (!isPlayer2Human && !isPlayersTurn) {
        const attackedFieldNumber = enemy.aiAttack(playerGameboard);
        const attackField = document.querySelector(
          `#player-${attackedFieldNumber}`
        );
        const hitReport = reportHit(playerGameboard, attackedFieldNumber);
        displayAttack(attackField, hitReport);

        isPlayersTurn = true;

        if (playerGameboard.isFleetDestroyed()) {
          displayWinner(enemy.name);
        }
      }
    });
  });

  if (isPlayer2Human) {
    playerFields.forEach((elem) => {
      elem.style.cursor = 'pointer';

      elem.addEventListener('click', () => {
        if (!isPlayersTurn) {
          const row = breakUpFieldId(elem).row;
          const column = breakUpFieldId(elem).column;

          const isAttackTookPlace = enemy.attackGameboard(
            playerGameboard,
            row,
            column
          );
          if (isAttackTookPlace) {
            const attackedField = row * 10 + column;
            const hitReport = reportHit(playerGameboard, attackedField);
            displayAttack(elem, hitReport);

            isPlayersTurn = true;

            if (playerGameboard.isFleetDestroyed()) {
              displayWinner(enemy.name);
            }
          }
        }
      });
    });
  }
}

function reportHit(gameboard, fieldNumber) {
  const attackedFieldContent = gameboard.displayGameboard()[fieldNumber];
  if (typeof attackedFieldContent === 'string') {
    return true;
  } else {
    return false;
  }
}

function breakUpFieldId(filed) {
  const filedNumber = Number(filed.id.split('-')[1]);
  const row = Math.floor(filedNumber / 10);
  const column = filedNumber - row * 10;

  return { row, column };
}
