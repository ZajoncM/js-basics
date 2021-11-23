const arraySum = require("./arraySum");

describe("arrayPairSum", () => {
  it("result [1,2,[3,4,[5]]] be 15", () => {
    expect(arraySum([1, 2, [3, 4, [5]]])).toBe(15);
  });

  it("result [0, 1, 2, 3, 4] be 10", () => {
    expect(arraySum([0, 1, 2, 3, 4])).toBe(10);
  });

  it("result [[0, [1]], [2, 3], 4] be 11", () => {
    expect(arraySum([[0, [1]], [2, 3], 5])).toBe(11);
  });
});
