import { removeShipFromList } from './dom';

let isVertical = false;

function makeDragable(elem) {
  elem.setAttribute('draggable', true);
  elem.addEventListener('dragstart', dragStart);
}

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e, gameboard) {
  e.target.classList.remove('drag-over');

  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  let shipLength = draggable.childElementCount;
  let startField = breakUpFieldId(e.target);
  let startFieldNumber = startField.row * 10 + startField.column;

  let isShipPlaced = _placeShipOnBoard(
    gameboard,
    shipLength,
    startField.row,
    startField.column,
    isVertical
  );

  if (isShipPlaced) {
    removeShipFromList(id);

    return { startFieldNumber, shipLength, isVertical };
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

function setDirection(direction) {
  isVertical = direction;
}

export {
  makeDragable,
  dragEnter,
  dragLeave,
  dragOver,
  drop,
  breakUpFieldId,
  setDirection,
};
