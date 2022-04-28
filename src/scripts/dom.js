import rotateSVG from '../img/rotate-svgrepo-com.svg';

import {
  makeDragable,
  dragEnter,
  dragLeave,
  dragOver,
  drop,
  setDirection,
} from './drag-n-drop';

const _battlefieldContainer = document.querySelector('.bf-container');
const _gameboardContainer = document.querySelector('.gb-container');

function displayRandomGrid(gameboard, gameboardOwner) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add(`gb-${gameboardOwner}`);

  gameboard.displayGameboard().forEach((elem, index) => {
    const gbField = document.createElement('div');
    gbField.classList.add(`${gameboardOwner}-field`);
    gbField.id = `${gameboardOwner}-${index}`;

    if (typeof elem === 'string') {
      gbField.style.backgroundColor = 'var(--ship-field-bg-clr)';
    } else {
      gbField.style.backgroundColor = 'var(--filed-bg-clr)';
    }

    gridContainer.appendChild(gbField);
  });

  _gameboardContainer.appendChild(gridContainer);
}

function displayPlayerGrid(gameboard, gameboardOwner) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add(`gb-${gameboardOwner}`);

  gameboard.displayGameboard().forEach((elem, index) => {
    const gbField = document.createElement('div');
    gbField.classList.add(`${gameboardOwner}-field`);
    gbField.id = `${gameboardOwner}-${index}`;

    gbField.addEventListener('dragenter', dragEnter);
    gbField.addEventListener('dragover', dragOver);
    gbField.addEventListener('dragleave', dragLeave);
    gbField.addEventListener('drop', (e) => {
      const coloringData = drop(e, gameboard);
      _displayDroppedShip(
        gameboardOwner,
        coloringData.startFieldNumber,
        coloringData.shipLength,
        coloringData.isVertical
      );
      setDirection(false);
    });

    gridContainer.appendChild(gbField);
  });

  _gameboardContainer.appendChild(gridContainer);
}

function cleanOutBFContainer() {
  _battlefieldContainer.textContent = '';
}

function displayAttack(field, isShip) {
  if (isShip) {
    field.style.backgroundColor = 'var(--hit-bg-clr)';
  } else {
    field.style.backgroundColor = 'var(--attacked-bg-clr)';
  }
}

function displayWinner(winner) {
  const winnerDiv = document.createElement('div');
  winnerDiv.classList.add('winner');
  winnerDiv.textContent = `Congratulation ${winner} you are the best fleet captain!`;

  _battlefieldContainer.appendChild(winnerDiv);
}

function displayShipList() {
  const shipListContainer = document.createElement('div');
  shipListContainer.classList.add('ship-list-container');
  shipListContainer.textContent = 'Place ships';
  _battlefieldContainer.appendChild(shipListContainer);

  const shipList = document.createElement('div');
  shipList.classList.add('ship-list');
  shipListContainer.appendChild(shipList);

  const patrolBoat = _creatShipListItem('Patrol boat', 2);
  shipList.appendChild(patrolBoat);

  const submarine = _creatShipListItem('Submarine', 3);
  shipList.appendChild(submarine);

  const destroyer = _creatShipListItem('Destroyer', 3);
  shipList.appendChild(destroyer);

  const battleship = _creatShipListItem('Battleship', 4);
  shipList.appendChild(battleship);

  const carrier = _creatShipListItem('Carrier', 5);
  shipList.appendChild(carrier);
}

function _creatShipListItem(shipname, shipLength) {
  let isShipRotated = false;
  const item = document.createElement('div');
  item.textContent = shipname;

  const shipContId = _convertToId(shipname);

  const rotBtn = document.createElement('button');
  rotBtn.classList.add('rotate-btn');
  rotBtn.id = `${shipContId}-btn`;
  const rotateImg = document.createElement('img');
  rotateImg.src = './8f7b2067fc665eeb0aed.svg';
  rotateImg.style.width = '1rem';

  rotBtn.addEventListener('click', () => {
    isShipRotated = !isShipRotated;
    _rotateShip(shipContId, isShipRotated, item);
    setDirection(isShipRotated);
  });
  rotBtn.appendChild(rotateImg);
  item.appendChild(rotBtn);

  const shipContainer = document.createElement('div');
  shipContainer.classList.add('ship-container');

  shipContainer.id = shipContId;

  for (let i = 0; i < shipLength; i++) {
    const shipField = document.createElement('div');
    shipField.classList.add('ship-field');
    shipContainer.appendChild(shipField);
  }

  makeDragable(shipContainer, isShipRotated);

  item.appendChild(shipContainer);

  return item;
}

function _displayDroppedShip(
  gameboardOwner,
  firstColoredFiledNumber,
  numberOfColoredFields,
  isClooringDirectionVertical
) {
  if (isClooringDirectionVertical) {
    for (
      let i = firstColoredFiledNumber;
      i < firstColoredFiledNumber + numberOfColoredFields * 10;
      i += 10
    ) {
      const field = document.getElementById(`${gameboardOwner}-${i}`);
      field.style.backgroundColor = 'var(--ship-field-bg-clr)';
    }
  } else {
    for (
      let i = firstColoredFiledNumber;
      i < firstColoredFiledNumber + numberOfColoredFields;
      i++
    ) {
      const field = document.getElementById(`${gameboardOwner}-${i}`);
      field.style.backgroundColor = 'var(--ship-field-bg-clr)';
    }
  }
}

function _rotateShip(shipId, direction, parentElement) {
  const shipCont = document.getElementById(shipId);
  if (direction) {
    shipCont.style.gridAutoFlow = 'row';
  } else {
    shipCont.style.gridAutoFlow = 'column';
  }

  parentElement.removeChild(parentElement.lastChild);
  parentElement.appendChild(shipCont);
}

function _convertToId(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

function removeShipFromList(shipContId) {
  const shipListRepresentation = document.getElementById(shipContId);
  shipListRepresentation.style.display = 'none';
}

export {
  displayRandomGrid,
  displayPlayerGrid,
  cleanOutBFContainer,
  displayAttack,
  displayWinner,
  displayShipList,
  removeShipFromList,
};
