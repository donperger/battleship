const Ship = (shipLength, shipMark) => {
  const _ship = new Array(shipLength).fill(shipMark);

  const displayShip = () => {
    return _ship;
  };

  const hit = (numberOfField) => {
    _ship[numberOfField] = 1;
  };

  const isSunk = () => {
    return !_ship.includes(shipMark);
  };

  return { displayShip, hit, isSunk };
};

export default Ship;
