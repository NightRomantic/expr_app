const getHammingDistance = require('../utils/getHammingDistance');
const matrixes = require('../mocks/matrix.mock');

function sendMatrix(req, res) {
  const distances = matrixes.map((_matrix) => getHammingDistance(req.body, _matrix));
  const nth = distances.indexOf(Math.min(...distances));
  res.json({
    index: nth + 1,
    side: matrixes[nth],
  });
}

module.exports = sendMatrix;
