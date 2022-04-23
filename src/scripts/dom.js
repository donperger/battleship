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
  field.textContent = 'X';
}

export { displayGameboardGrid, cleanOutBFContainer, displayAttack };
