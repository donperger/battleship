import { changeGridElementsBorder, removeShipFromList } from './dom';

let draggedElement;

const _directions = [
  { id: 'patrol-boat', direction: false },
  { id: 'submarine', direction: false },
  { id: 'destroyer', direction: false },
  { id: 'battleship', direction: false },
  { id: 'carrier', direction: false },
];

function makeDragable(elem) {
  elem.setAttribute('draggable', true);
  elem.addEventListener('dragstart', dragStart);
}

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  draggedElement = e.target;
}

function dragEnter(e) {
  e.preventDefault();
  changeGridElementsBorder(e.target, draggedElement, false);
}

function dragOver(e) {
  e.preventDefault();
  changeGridElementsBorder(e.target, draggedElement, false);
}

function dragLeave(e) {
  changeGridElementsBorder(e.target, draggedElement, true);
}

function drop(e, gameboard) {
  changeGridElementsBorder(e.target, draggedElement, true);

  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  const shipLength = draggable.childElementCount;
  const startField = breakUpFieldId(e.target);
  const startFieldNumber = startField.row * 10 + startField.column;
  const shipDirection = _directions.filter(
    (elem) => elem.id === draggable.id
  )[0].direction;

  const isShipPlaced = _placeShipOnBoard(
    gameboard,
    shipLength,
    startField.row,
    startField.column,
    shipDirection
  );

  if (isShipPlaced) {
    removeShipFromList(id);

    return { startFieldNumber, shipLength, shipDirection };
  }
}

function _placeShipOnBoard(gameboard, length, y, x, direction) {
  const isShipPlaced = gameboard.placeShip(length, y, x, direction);

  return isShipPlaced;
}

function breakUpFieldId(filed) {
  const filedNumber = Number(filed.id.split('-')[1]);
  const row = Math.floor(filedNumber / 10);
  const column = filedNumber - row * 10;

  return { row, column };
}

function setShipDirection(shipName, direction) {
  _directions.forEach((elem) => {
    if (elem.id === shipName) elem.direction = direction;
  });
}

export {
  makeDragable,
  dragEnter,
  dragLeave,
  dragOver,
  drop,
  breakUpFieldId,
  setShipDirection,
};
