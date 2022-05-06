import '../img/icons8-github.svg';
import '../styles/main.css';
import '../styles/gameboard.css';
import '../styles/winner.css';
import '../styles/ship-list.css';
import '../styles/form.css';

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
  displaySetupForm,
  hideShipList,
  deleteForm,
} from './dom';
import { breakUpFieldId } from './drag-n-drop';
import { collectFormData, handleTextInput } from './form';

let isPlayersTurn = true;

startGame();

function startGame() {
  displaySetupForm();
  handleTextInput();

  const playBtn = document.querySelector('.play-btn');
  playBtn.addEventListener('click', () => {
    const formData = collectFormData();
    if (formData.p1Name && formData.p2Name) {
      deleteForm();

      const gameData = setUpGame(
        formData.p1Name,
        formData.p2Name,
        formData.isP2Human
      );

      if (!formData.isP2Human) {
        const readyBtn = document.querySelector('.ready-btn');
        readyBtn.addEventListener('click', () => {
          if (gameData.playerGameboard.isFleetPlaced()) {
            hideShipList();

            gameLoop(
              gameData.player,
              gameData.playerGameboard,
              gameData.enemy,
              gameData.enemyGameboard
            );
          }
        });
      }
    }
  });
}

function setUpGame(player1Name, player2Name, isPlayer2Human) {
  const player = Player(player1Name, true);
  const enemy = Player(player2Name, isPlayer2Human);
  const playerGameboard = Gameboard();
  const enemyGameboard = Gameboard();

  displayPlayerGrid(playerGameboard, 'player', player.name, isPlayer2Human);
  displayShipList();

  if (!isPlayer2Human) {
    enemyGameboard.placeShipsRandomly();
    displayRandomGrid(enemyGameboard, 'enemy', enemy.name);
  } else {
    const readyBtn = document.querySelector('.ready-btn');
    readyBtn.addEventListener('click', () => {
      if (playerGameboard.isFleetPlaced()) {
        cleanOutGBContainer();
        hideShipList();

        displayPlayerGrid(enemyGameboard, 'enemy', enemy.name, isPlayer2Human);
        displayShipList();

        const readyBtn = document.querySelector('.ready-btn');
        readyBtn.addEventListener('click', () => {
          if (enemyGameboard.isFleetPlaced()) {
            cleanOutGBContainer();
            hideShipList();

            displayRandomGrid(playerGameboard, 'player', player.name);
            displayRandomGrid(enemyGameboard, 'enemy', enemy.name);

            gameLoop(player, playerGameboard, enemy, enemyGameboard);
          }
        });
      }
    });
  }

  return { player, playerGameboard, enemy, enemyGameboard };
}

function gameLoop(player, playerGameboard, enemy, enemyGameboard) {
  isPlayersTurn = true;

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

      if (enemy.comp && !isPlayersTurn) {
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

  if (!enemy.comp) {
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
    hideWinner();
    startGame();
  });
}
