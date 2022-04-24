import Ship from './ship';
import { getRandomInt } from './player';

const Gameboard = () => {
  const _gameboard = new Array(100).fill(0);
  const _attackedGameboardFields = new Array(100).fill(0);

  let patrolBoat;
  let submarine;
  let destroyer;
  let battleship;
  let carrier;

  const displayGameboard = () => {
    return _gameboard;
  };

  const displayAttacks = () => {
    return _attackedGameboardFields;
  };

  const placeShip = (shipLength, startY, startX, isVertical) => {
    let newShip;
    const indexOfStartField = startY * 10 + startX;

    const isFieldsFree = _checkFreeFields(
      shipLength,
      indexOfStartField,
      isVertical
    );
    const isShipInGameboard = _checkShipWithinGameboard(
      shipLength,
      indexOfStartField,
      isVertical
    );
    if (!isFieldsFree || !isShipInGameboard) {
      return false;
    } else {
      newShip = _createShip(shipLength);
    }

    newShip.displayShip().forEach((elem, index) => {
      if (isVertical) {
        _gameboard.splice(indexOfStartField + index * 10, 1, elem);
      } else {
        _gameboard.splice(indexOfStartField + index, 1, elem);
      }
    });

    return true;
  };

  const _createShip = (shipLength) => {
    if (shipLength === 2) {
      patrolBoat = Ship(2, 'pb');
      return patrolBoat;
    } else if (shipLength === 3) {
      if (!submarine) {
        submarine = Ship(3, 'sb');
        return submarine;
      } else {
        destroyer = Ship(3, 'ds');
        return destroyer;
      }
    } else if (shipLength === 4) {
      battleship = Ship(4, 'bs');
      return battleship;
    } else if (shipLength === 5) {
      carrier = Ship(5, 'cr');
      return carrier;
    }
  };

  const _checkFreeFields = (shipLength, startField, isVertical) => {
    if (isVertical) {
      let rowNumber = 0;
      const gameboardFields = _gameboard.filter((elem, index) => {
        if (index === startField + rowNumber * 10) {
          rowNumber += 1;
          return true;
        }
      });

      return !gameboardFields.some((field) => /[a-z]/.test(field));
    } else {
      const gameboardFields = _gameboard.slice(
        startField,
        startField + shipLength
      );

      return !gameboardFields.some((field) => /[a-z]/.test(field));
    }
  };

  const _checkShipWithinGameboard = (shipLength, startField, isVertical) => {
    if (isVertical) {
      const lastDecimal = Math.floor((startField + (shipLength - 1) * 10) / 10);
      if (lastDecimal > 9) {
        return false;
      }
      return true;
    } else {
      const firstDecimal = Math.floor(startField / 10);
      const lastDecimal = Math.floor((startField + shipLength - 1) / 10);
      if (firstDecimal !== lastDecimal) {
        return false;
      }
      return true;
    }
  };

  const receiveAttack = (coordY, coordX) => {
    const attackedFieldIndex = coordY * 10 + coordX;

    if (typeof _gameboard[attackedFieldIndex] === 'string') {
      const attackedShipMark = _gameboard[attackedFieldIndex];
      const shipHologram = [];

      _gameboard.forEach((elem, index) => {
        if (elem === attackedShipMark) {
          shipHologram.push(index);
        }
      });

      const attackedShipFieldIndex = shipHologram.indexOf(attackedFieldIndex);
      _attackShip(attackedShipMark, attackedShipFieldIndex);
    }

    _attackedGameboardFields[attackedFieldIndex] = 1;
  };

  const _attackShip = (shipMark, attackedField) => {
    if (shipMark === 'pb') {
      patrolBoat.hit(attackedField);
    } else if (shipMark === 'sb') {
      submarine.hit(attackedField);
    } else if (shipMark === 'ds') {
      destroyer.hit(attackedField);
    } else if (shipMark === 'bs') {
      battleship.hit(attackedField);
    } else if (shipMark === 'cr') {
      carrier.hit(attackedField);
    }
  };

  const displayShips = () => {
    return { patrolBoat, submarine, destroyer, battleship, carrier };
  };

  const isFleetDestroyed = () => {
    return (
      patrolBoat.isSunk() &&
      submarine.isSunk() &&
      destroyer.isSunk() &&
      battleship.isSunk() &&
      carrier.isSunk()
    );
  };

  function placeShipsRandomly() {
    const lengths = [2, 3, 3, 4, 5];

    lengths.forEach((elem) => {
      let placeData = _generatePlaceData();
      let isShipPlaced = placeShip(
        elem,
        placeData.row,
        placeData.column,
        placeData.direction
      );

      while (!isShipPlaced) {
        placeData = _generatePlaceData();
        isShipPlaced = placeShip(
          elem,
          placeData.row,
          placeData.column,
          placeData.direction
        );
      }
    });
  }

  function _generatePlaceData() {
    const row = getRandomInt(10);
    const column = getRandomInt(10);
    const direction = getRandomInt(2) === 0 ? true : false;

    return { row, column, direction };
  }

  return {
    displayGameboard,
    displayAttacks,
    placeShip,
    receiveAttack,
    displayShips,
    isFleetDestroyed,
    placeShipsRandomly,
  };
};

export default Gameboard;
