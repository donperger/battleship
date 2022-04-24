const _battlefieldContainer = document.querySelector('.bf-container');

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

  _battlefieldContainer.appendChild(gridContainer);
}

function cleanOutBFContainer() {
  _battlefieldContainer.textContent = '';
}

function displayAttack(field) {
  field.classList.add('hit');
}

function displayWinner(winner) {
  const winnerDiv = document.createElement('div');
  winnerDiv.classList.add('winner');
  winnerDiv.textContent = `Congratulation ${winner} you are the best fleet captain!`;

  _battlefieldContainer.appendChild(winnerDiv);
}

export {
  displayGameboardGrid,
  cleanOutBFContainer,
  displayAttack,
  displayWinner,
};
