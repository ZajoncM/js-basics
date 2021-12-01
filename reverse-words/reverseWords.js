const reverseWords = (value) => {
  const arrayValue = value.trim().split(" ");
  return arrayValue.reverse().join(" ");
};

module.exports = reverseWords;
