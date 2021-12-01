const integerLength = require("./integerLength");

describe("integerLength", () => {
  it("should return 1 length for 4", () => {
    expect(integerLength(4)).toEqual(1);
  });

  it("should return 6 length for 100000", () => {
    expect(integerLength(100000)).toEqual(6);
  });
});
