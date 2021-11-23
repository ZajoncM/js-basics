const arraySum = (arrayValues) => {
  return parseInt(
    arrayValues.flat(Infinity).reduce((prev, value) => prev + value)
  );
};

module.exports = arraySum;
