const arraySum = (arrayValues) => {
  return arrayValues.flat(Infinity).reduce((prev, value) => prev + value);
};

module.exports = arraySum;
