import { makeDragable } from './drag-n-drop';

const _battlefieldContainer = document.querySelector('.bf-container');
const _gameboardContainer = document.querySelector('.gb-container');

function displayGameboardGrid(gameboardArray, gameboardOwner) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add(`gb-${gameboardOwner}`);

  gameboardArray.forEach((elem, index) => {
    const gbField = document.createElement('div');
    gbField.classList.add(`${gameboardOwner}-field`);
    gbField.id = `${gameboardOwner}-${index}`;
    gbField.textContent = elem;
    gridContainer.appendChild(gbField);
  });

  _gameboardContainer.appendChild(gridContainer);
}

function cleanOutBFContainer() {
  _battlefieldContainer.textContent = '';
}

function displayAttack(field, isShip) {
  if (isShip) {
    field.classList.add('hit');
  } else {
    field.classList.add('attacked');
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

function _convertToId(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

export {
  displayGameboardGrid,
  cleanOutBFContainer,
  displayAttack,
  displayWinner,
  displayShipList,
};
