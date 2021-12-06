// const flatten = (array) => array.flat(Infinity);

const flatten = (array) => {
  return array.reduce((flat, value) => {
    return flat.concat(Array.isArray(value) ? flatten(value) : value);
  }, []);
};

module.exports = flatten;
