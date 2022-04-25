import {
  makeDragable,
  dragEnter,
  dragLeave,
  dragOver,
  drop,
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

  const shipList = document.createElement('ul');
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
  const item = document.createElement('li');
  item.textContent = shipname;

  const shipContainer = document.createElement('div');
  shipContainer.classList.add('ship-container');

  const shipContId = _convertToId(shipname);
  shipContainer.id = shipContId;

  for (let i = 0; i < shipLength; i++) {
    const shipField = document.createElement('div');
    shipField.classList.add('ship-field');
    shipContainer.appendChild(shipField);
  }

  makeDragable(shipContainer);

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

function _convertToId(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

export {
  displayRandomGrid,
  displayPlayerGrid,
  cleanOutBFContainer,
  displayAttack,
  displayWinner,
  displayShipList,
};
