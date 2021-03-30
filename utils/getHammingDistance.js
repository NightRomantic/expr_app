const flatten = require('lodash.flatten');

function getHammingDistance(arr1, arr2) {
  return flatten(arr1.map((row, index) => {
    return row.map((val, idx) => val !== arr2[index][idx]).filter(v => !!v);
  })).length;
}

module.exports = getHammingDistance;
