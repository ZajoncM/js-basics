const integerDifference = (value, array) => {
  let counter = 0;
  for (let x = 0; x < array.length; x++) {
    const elementX = array[x];
    for (let y = x; y < array.length; y++) {
      const elementY = array[y];
      if (Math.abs(elementX - elementY) === value) counter += 1;
    }
  }
  return counter;
};

module.exports = integerDifference;
