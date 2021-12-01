const integerDifference = require("./integerDifference");

describe("integerDifference", () => {
  it("should find 3 differences with 4 value", () => {
    const enterData = [1, 1, 5, 6, 9, 16, 27];

    expect(integerDifference(4, enterData)).toEqual(3);
  });

  it("should find 4 differences with 2 value", () => {
    const enterData = [1, 1, 3, 3];

    expect(integerDifference(2, enterData)).toEqual(4);
  });
});
