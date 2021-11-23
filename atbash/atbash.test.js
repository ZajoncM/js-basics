const atbash = require("./atbash");

describe("atbash", () => {
  it("irk will be rip", () => {
    expect(atbash("irk")).toBe("rip");
  });

  it("low will be old", () => {
    expect(atbash("low")).toBe("old");
  });

  it("abcdefghijklmnopqrstuvwxyz will be zyxwvutsrqponmlkjihgfedcba", () => {
    expect(atbash("abcdefghijklmnopqrstuvwxyz")).toBe(
      "zyxwvutsrqponmlkjihgfedcba"
    );
  });

  it("a will be z", () => {
    expect(atbash("a")).toBe("z");
  });

  it("z will be a", () => {
    expect(atbash("z")).toBe("a");
  });

  it("wizard will be draziw", () => {
    expect(atbash("wizard")).toBe("draziw");
  });
});
