import '../img/icons8-github.svg';
import '../styles/main.css';
import '../styles/gameboard.css';
import '../styles/winner.css';
import '../styles/ship-list.css';

import { Player } from './player';
import Gameboard from './gameboard';
import {
  displayAttack,
  displayRandomGrid,
  displayPlayerGrid,
  displayShipList,
  displayWinner,
  cleanOutGBContainer,
  hideWinner,
} from './dom';
import { breakUpFieldId } from './drag-n-drop';

let isPlayersTurn = true;

setUpGame('Human', 'Computer', false);

function setUpGame(player1Name, player2Name, isPlayer2Human) {
  isPlayersTurn = true;

  const player = Player(player1Name, true);
  const enemy = Player(player2Name, isPlayer2Human);
  const playerGameboard = Gameboard();
  const enemyGameboard = Gameboard();

  enemyGameboard.placeShipsRandomly();

  displayPlayerGrid(playerGameboard, 'player');

  displayRandomGrid(enemyGameboard, 'enemy');

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
            stateWinner(player);
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
          stateWinner(enemy);
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
              stateWinner(enemy);
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

function stateWinner(winner) {
  displayWinner(winner.name);
  const playAgainBtn = document.querySelector('.play-again-btn');
  playAgainBtn.addEventListener('click', () => {
    cleanOutGBContainer();
    setUpGame('Human', 'Computer', false);
    hideWinner();
  });
}
