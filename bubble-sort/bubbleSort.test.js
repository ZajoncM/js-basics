const bubbleSort = require("./bubbleSort");

describe("bubbleSort", () => {
  it("[40, 60, 1, 200, 9, 83, 17] will be sorted", () => {
    const exampleArray = [40, 60, 1, 200, 9, 83, 17];

    const sortedArray = exampleArray.sort();

    expect(bubbleSort(exampleArray)).toEqual(sortedArray);
  });
});
