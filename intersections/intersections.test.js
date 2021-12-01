const intersections = require("./intersections");

describe("intersections", () => {
  it("should compares two arrays", () => {
    const firstArray = ["dog", "cat", "egg"];
    const secondArray = ["cat", "dog", "chicken"];
    const resultArray = ["dog", "cat"];

    expect(intersections(firstArray, secondArray)).toEqual(resultArray);
  });
});
