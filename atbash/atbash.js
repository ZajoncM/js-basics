const atbash = (enterValue) => {
  const values = "abcdefghijklmnopqrstuvwxyz".split("");

  const enterValueArray = enterValue.split("");

  const resultValue = enterValueArray.map((value) => {
    const index = values.indexOf(value);
    return values[values.length - index - 1];
  });
  return resultValue.join("");
};

module.exports = atbash;
