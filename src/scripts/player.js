const Player = (playerName, isHuman) => {
  const name = playerName;
  const comp = !isHuman;

  const attackGameboard = (gameboard, coordY, coordX) => {
    const filedToAttack = coordY * 10 + coordX;
    const canAttackField = _checkIfFiledWasAttacked(gameboard, filedToAttack);
    if (!canAttackField) {
      return false;
    }
    gameboard.receiveAttack(coordY, coordX);
  };

  const aiAttack = (gameboard) => {
    let fieldToAttack = getRandomInt(100);

    while (!_checkIfFiledWasAttacked(gameboard, fieldToAttack)) {
      fieldToAttack = getRandomInt(100);
    }

    const row = Math.floor(fieldToAttack / 10);
    const column = fieldToAttack - row * 10;

    gameboard.receiveAttack(row, column);

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

  return { name, comp, attackGameboard, aiAttack };
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export { Player, getRandomInt };
