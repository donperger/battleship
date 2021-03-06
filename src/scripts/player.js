const Player = (playerName, isHuman) => {
  const name = playerName;
  const comp = !isHuman;
  let _isPreviousAtrackHit = false;
  let _lastAttackedField;

  const attackGameboard = (gameboard, coordY, coordX) => {
    const filedToAttack = coordY * 10 + coordX;
    const canAttackField = _checkIfFiledWasAttacked(gameboard, filedToAttack);
    if (!canAttackField) {
      return false;
    }
    gameboard.receiveAttack(coordY, coordX);

    const isHit =
      typeof gameboard.displayGameboard()[filedToAttack] === 'string'
        ? true
        : false;

    if (isHit) {
      _isPreviousAtrackHit = true;
    } else {
      _isPreviousAtrackHit = false;
    }
    _lastAttackedField = filedToAttack;

    return true;
  };

  const aiAttack = (gameboard) => {
    let fieldToAttack;
    if (_isPreviousAtrackHit) {
      fieldToAttack = _getNextFieldNumber(_lastAttackedField, gameboard);
    } else {
      fieldToAttack = getRandomInt(100);
    }

    while (!_checkIfFiledWasAttacked(gameboard, fieldToAttack)) {
      fieldToAttack = getRandomInt(100);
    }

    const row = Math.floor(fieldToAttack / 10);
    const column = fieldToAttack - row * 10;

    gameboard.receiveAttack(row, column);
    const isHit =
      typeof gameboard.displayGameboard()[fieldToAttack] === 'string'
        ? true
        : false;

    if (isHit) {
      _isPreviousAtrackHit = true;
    } else {
      _isPreviousAtrackHit = false;
    }
    _lastAttackedField = fieldToAttack;

    return fieldToAttack;
  };

  const _checkIfFiledWasAttacked = (gameboard, fieldNumber) => {
    const to = fieldNumber + 1;
    const attackedFieldContent = gameboard
      .displayAttacks()
      .slice(fieldNumber, to)[0];
    if (attackedFieldContent === 1) {
      return false;
    } else {
      return true;
    }
  };

  const _getNextFieldNumber = (attackedFieldNumber, gameboardToAttack) => {
    const nextFields = [
      attackedFieldNumber - 1,
      attackedFieldNumber - 10,
      attackedFieldNumber + 1,
      attackedFieldNumber + 10,
    ];
    const filteredFields = nextFields.filter((filedNum) => {
      if (filedNum < 0 || filedNum > 99) {
        return false;
      }
      const wasAttacked = _checkIfFiledWasAttacked(gameboardToAttack, filedNum);
      return wasAttacked;
    });

    if (filteredFields[0]) {
      return filteredFields[Math.floor(Math.random() * filteredFields.length)];
    } else {
      return getRandomInt(100);
    }
  };

  return { name, comp, attackGameboard, aiAttack };
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export { Player, getRandomInt };
