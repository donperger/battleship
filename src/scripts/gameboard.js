import Ship from './ship';

const Gameboard = () => {
  const _gameboard = new Array(100).fill(0);

  let patrolBoat;
  let submarine;
  let destroyer;
  let battleship;
  let carrier;

  const displayGameboard = () => {
    return _gameboard;
  };

  const placeShip = (shipLength, startY, startX, isVertical) => {
    const newShip = _createShip(shipLength);
    const indexOfStartField = startY * 10 + startX;

    const isShipPlaceable = _checkIfShipIsPlaceable(
      shipLength,
      indexOfStartField,
      isVertical
    );
    if (!isShipPlaceable) {
      return false;
    }

    newShip.displayShip().forEach((elem, index) => {
      if (isVertical) {
        _gameboard.splice(indexOfStartField + index * 10, 1, elem);
      } else {
        _gameboard.splice(indexOfStartField + index, 1, elem);
      }
    });
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

  const _checkIfShipIsPlaceable = (shipLength, startField, isVertical) => {
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

  return { displayGameboard, placeShip };
};

export default Gameboard;
