const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  it("should return 0 for 0 enter value", () => {
    expect(fibonacci(0)).toEqual(0);
  });

  it("should return 1 for 2 enter value", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  it("should return 89 for 11 enter value", () => {
    expect(fibonacci(11)).toEqual(89);
  });
});
