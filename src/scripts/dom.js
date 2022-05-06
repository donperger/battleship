import rotateSVG from '../img/rotate-svgrepo-com.svg';

import {
  makeDragable,
  dragEnter,
  dragLeave,
  dragOver,
  drop,
  setShipDirection,
} from './drag-n-drop';

import { handleTextInput } from './form';

const _battlefieldContainer = document.querySelector('.bf-container');
const _gameboardContainer = document.querySelector('.gb-container');

function displayRandomGrid(gameboard, gameboardOwner, ownerName) {
  _gameboardContainer.style.justifyContent = 'space-around';

  const sideCont = document.createElement('div');
  sideCont.classList.add(`${gameboardOwner}-side`);
  _gameboardContainer.appendChild(sideCont);

  const gbTitle = document.createElement('h2');
  gbTitle.classList.add('gb-title');
  gbTitle.textContent = `${ownerName}'s gameboard`;
  sideCont.appendChild(gbTitle);

  const gridContainer = document.createElement('div');
  gridContainer.classList.add(`gb-${gameboardOwner}`);

  gameboard.displayGameboard().forEach((elem, index) => {
    const gbField = document.createElement('div');
    gbField.classList.add(`${gameboardOwner}-field`);
    gbField.id = `${gameboardOwner}-${index}`;

    gridContainer.appendChild(gbField);
  });
  sideCont.appendChild(gridContainer);
}

function displayPlayerGrid(gameboard, gameboardOwner, ownerName, isPvP) {
  if (isPvP) {
    _gameboardContainer.style.justifyContent = 'flex-start';
  }

  const sideCont = document.createElement('div');
  sideCont.classList.add(`${gameboardOwner}-side`);
  _gameboardContainer.appendChild(sideCont);

  const gbTitle = document.createElement('h2');
  gbTitle.classList.add('gb-title');
  gbTitle.textContent = `${ownerName}'s gameboard`;
  sideCont.appendChild(gbTitle);

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
      if (coloringData) {
        _displayDroppedShip(
          gameboardOwner,
          coloringData.startFieldNumber,
          coloringData.shipLength,
          coloringData.shipDirection
        );
      }
    });

    gridContainer.appendChild(gbField);
  });
  sideCont.appendChild(gridContainer);

  const readyButton = document.createElement('button');
  readyButton.classList.add('ready-btn');
  readyButton.textContent = `I'm ready`;
  sideCont.appendChild(readyButton);

  const mustPlaceText = document.createElement('span');
  mustPlaceText.classList.add('must-place-text');
  mustPlaceText.textContent = 'You must place all you ships to be ready!';
  sideCont.appendChild(mustPlaceText);
}

function cleanOutGBContainer() {
  _gameboardContainer.textContent = '';
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
  winnerDiv.textContent = `Congratulation ${winner}`;

  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play again';
  playAgainBtn.classList.add('play-again-btn');
  winnerDiv.appendChild(playAgainBtn);

  _battlefieldContainer.appendChild(winnerDiv);
}

function hideWinner() {
  const winnerDiv = document.querySelector('.winner');
  winnerDiv.parentNode.removeChild(winnerDiv);
}

function displayShipList() {
  const shipListContainer = document.createElement('div');
  shipListContainer.classList.add('ship-list-container');

  const instruction = document.createElement('h1');
  instruction.classList.add('instruction');
  instruction.textContent = 'Deploy your ships, Captain!';
  shipListContainer.appendChild(instruction);

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
  item.classList.add('ship-card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');

  const cardTitle = document.createElement('span');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = shipname;
  cardHeader.appendChild(cardTitle);

  const shipContId = _convertToId(shipname);

  const rotBtn = document.createElement('button');
  rotBtn.classList.add('rotate-btn');
  rotBtn.id = `${shipContId}-btn`;
  const rotateImg = document.createElement('img');
  rotateImg.src = './8f7b2067fc665eeb0aed.svg';

  rotBtn.addEventListener('click', () => {
    isShipRotated = !isShipRotated;
    _rotateShip(shipContId, isShipRotated, item);
    setShipDirection(shipContId, isShipRotated);
  });
  rotBtn.appendChild(rotateImg);
  cardHeader.appendChild(rotBtn);

  item.appendChild(cardHeader);

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

function changeGridElementsBorder(startElem, draggedElement, isRemove) {
  const gameboardOwner = startElem.id.split('-')[0];
  const numOfStartElem = Number(startElem.id.split('-')[1]);
  const isVertical = draggedElement.style.gridAutoFlow === 'row';

  const isPlacingValid = _checkPlacingValidity(
    numOfStartElem,
    draggedElement.childElementCount,
    isVertical
  );
  if (!isPlacingValid) {
    return false;
  }
  for (let i = 0; i < draggedElement.childElementCount; i++) {
    let elem;
    if (isVertical) {
      elem = document.getElementById(
        `${gameboardOwner}-${numOfStartElem + i * 10}`
      );
    } else {
      elem = document.getElementById(`${gameboardOwner}-${numOfStartElem + i}`);
    }

    if (isRemove) {
      elem.classList.remove('drag-over');
    } else {
      elem.classList.add('drag-over');
    }
  }
}

function _checkPlacingValidity(startFieldNumber, shipLength, isVertical) {
  if (isVertical) {
    return startFieldNumber + (shipLength - 1) * 10 < 100;
  } else {
    const startFieldDecimal = Math.floor(startFieldNumber / 10);
    const endFieldDecimal = Math.floor(
      (startFieldNumber + shipLength - 1) / 10
    );
    return startFieldDecimal === endFieldDecimal;
  }
}

function displaySetupForm() {
  const setupFormCont = document.createElement('div');
  setupFormCont.classList.add('setup-form-cont');
  _battlefieldContainer.appendChild(setupFormCont);

  const player1InfoCont = document.createElement('div');
  player1InfoCont.classList.add('p1-info');
  setupFormCont.appendChild(player1InfoCont);

  const player1NameField = _createTextInput(
    `First player's name*`,
    'p1-name-container',
    'p1Name',
    'Jane',
    true
  );
  player1InfoCont.appendChild(player1NameField);

  const player2InfoCont = document.createElement('div');
  player2InfoCont.classList.add('p2-info');
  setupFormCont.appendChild(player2InfoCont);

  const playerTypeDropdown = _createDropdowntInput(
    'Second player type',
    'p2-type',
    'p2Type',
    'Computer',
    'Human'
  );

  playerTypeDropdown.addEventListener('change', handleTextInput);

  player2InfoCont.appendChild(playerTypeDropdown);

  const player2NameField = _createTextInput(
    `Second player's name`,
    'p2-name-container',
    'p2Name',
    'John',
    true
  );
  player2InfoCont.appendChild(player2NameField);

  const playBtn = document.createElement('button');
  playBtn.classList.add('play-btn');
  playBtn.textContent = 'Play';
  playBtn.setAttribute('type', 'button');
  setupFormCont.appendChild(playBtn);
}

function _createTextInput(
  labelTextcontent,
  conteinerClass,
  inputId,
  placeholder,
  isRequired
) {
  const inputCont = document.createElement('div');
  inputCont.classList.add(conteinerClass);

  const inputLabel = document.createElement('label');
  inputLabel.setAttribute('for', inputId);
  inputLabel.textContent = labelTextcontent;
  inputCont.appendChild(inputLabel);

  const inputField = document.createElement('input');
  inputField.id = inputId;
  inputField.setAttribute('placeholder', placeholder);
  inputField.required = isRequired;
  inputCont.appendChild(inputField);

  const validateText = document.createElement('span');
  validateText.classList.add(`validate-text-${inputId}`);
  validateText.textContent = 'This field is required!';
  inputCont.appendChild(validateText);

  return inputCont;
}

function _createDropdowntInput(
  labelTextcontent,
  conteinerClass,
  dropdownId,
  ...options
) {
  const dropdownCont = document.createElement('div');
  dropdownCont.classList.add(conteinerClass);

  const dropdownLabel = document.createElement('label');
  dropdownLabel.setAttribute('for', dropdownId);
  dropdownLabel.textContent = labelTextcontent;
  dropdownCont.appendChild(dropdownLabel);

  const dropdownField = document.createElement('select');
  dropdownField.setAttribute('name', dropdownId);
  dropdownField.id = dropdownId;

  options.forEach((option) => {
    const optionElem = document.createElement('option');
    const optionValue = option.toLowerCase().split(' ').join('_');
    optionElem.setAttribute('value', optionValue);
    optionElem.textContent = option;
    dropdownField.appendChild(optionElem);
  });

  dropdownCont.appendChild(dropdownField);

  return dropdownCont;
}

function hideShipList() {
  const shipListContainer = document.querySelector('.ship-list-container');
  shipListContainer.parentNode.removeChild(shipListContainer);
}

function deleteForm() {
  _battlefieldContainer.removeChild(_battlefieldContainer.lastChild);
}

function showValidateTexts(p1NameInput, p2Type, p2NameInput) {
  const p1ValidateText = document.querySelector('.validate-text-p1Name');
  const p2ValidateText = document.querySelector('.validate-text-p2Name');

  if (!p1NameInput) {
    p1ValidateText.style.display = 'inline-block';
  } else {
    p1ValidateText.style.display = 'none';
  }

  if (!p2NameInput && p2Type) {
    p2ValidateText.style.display = 'inline-block';
  } else {
    p2ValidateText.style.display = 'none';
  }
}

export {
  displayRandomGrid,
  displayPlayerGrid,
  cleanOutGBContainer,
  displayAttack,
  displayWinner,
  displayShipList,
  removeShipFromList,
  hideWinner,
  changeGridElementsBorder,
  displaySetupForm,
  hideShipList,
  deleteForm,
  showValidateTexts,
};
