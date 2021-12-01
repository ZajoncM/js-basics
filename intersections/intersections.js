const intersections = (firstArray, secondArray) =>
  firstArray.filter((element) => secondArray.includes(element));

module.exports = intersections;
