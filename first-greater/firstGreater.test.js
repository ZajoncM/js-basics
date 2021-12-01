const firstGreater = require("./firstGreater");

describe("firstGreater", () => {
  it("should return 10", () => {
    expect(firstGreater([2, 10, 5, 6, 80], 6)).toEqual(10);
  });

  it("should return 80", () => {
    expect(firstGreater([2, 10, 5, 6, 80], 20)).toEqual(80);
  });

  it("should not match any value", () => {
    expect(firstGreater([2, 10, 5, 6, 80], 100)).toBeUndefined();
  });
});
