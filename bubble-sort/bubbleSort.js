const bubbleSort = (enterArray) => {
  const resultArray = enterArray;

  for (i = 0; i < resultArray.length; i++) {
    for (j = 0; j < resultArray.length; j++) {
      if (resultArray[i] < resultArray[j]) {
        const tmpValue = resultArray[j];
        resultArray[j] = resultArray[i];
        resultArray[i] = tmpValue;
      }
    }
  }

  return resultArray;
};

module.exports = bubbleSort;
