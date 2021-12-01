const reverseWords = require("./reverseWords");

describe("reverseWords", () => {
  it("should reverse sentence", () => {
    const testValue = "   Interviews are awesome!   ";
    const reversedValue = "awesome! are Interviews";
    expect(reverseWords(testValue)).toEqual(reversedValue);
  });
});
