const firstGreater = require("./firstGreater");

describe("firstGreater", () => {
  it("should return 0 for 0 enter value", () => {
    expect(firstGreater([2, 10, 5, 6, 80], 6)).toEqual(10);
  });

  it("should return 1 for 2 enter value", () => {
    expect(firstGreater([2, 10, 5, 6, 80], 20)).toEqual(80);
  });

  it("should return 89 for 11 enter value", () => {
    expect(firstGreater([2, 10, 5, 6, 80], 100)).toBeUndefined();
  });
});
