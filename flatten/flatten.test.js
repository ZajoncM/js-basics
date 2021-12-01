const flatten = require("./flatten");

describe("firstGreater", () => {
  it("should flat an array", () => {
    const enterData = [1, 2, [3, [4], 5, 6], 7];
    const resultData = [1, 2, 3, 4, 5, 6, 7];

    expect(flatten(enterData)).toEqual(resultData);
  });
});
