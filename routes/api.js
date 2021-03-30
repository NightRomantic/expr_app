const express = require('express');
const router = express.Router();

module.exports = ({ db }) => {

  router.post('/sendForm', (req, res) => {
    const { title, content } = req.body || {};
    const post = {
      title,
      content,
    };
    db.posts.insert(post, (err) => {
      if (err) {
        throw new Error(err);
      }
      res.redirect('/');
    });
  });

  router.post('/sendMatrix', (req, res) => {
    //console.log(req.body);
    a = getResult(req.body);
    res.json({ a });
  });

  return router;
};
function getResult(matrix) {
  const matr1 = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, true, true, false, false, false],
    [false, false, false, true, true, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]
  ];
  const matr3 = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, true, true, false],
    [false, false, false, false, false, true, true, false],
    [false, false, false, true, true, false, false, false],
    [false, false, false, true, true, false, false, false],
    [false, true, true, false, false, false, false, false],
    [false, true, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]
  ];
  const matr2 = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, true, true, false],
    [false, false, false, false, false, true, true, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, true, true, false, false, false, false, false],
    [false, true, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]
  ];
  const matr4 = [
    [false, false, false, false, false, false, false, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, false, false, false, false, false, false, false]
  ];
  const matr5 = [
    [false, false, false, false, false, false, false, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, false, false, true, true, false, false, false],
    [false, false, false, true, true, false, false, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, false, false, false, false, false, false, false]
  ];
  const matr6 = [
    [false, false, false, false, false, false, false, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, true, true, false, false, true, true, false],
    [false, false, false, false, false, false, false, false]
  ];
  res1 = res2 = res3 = res4 = res5 = res6 = 0;
  for (var i = 0; i < 8; i++){
    for (var j = 0; j < 8; j++){
      if (matrix[i][j] !== matr1[i] [j]) {
        res1++;
      }
      if (matrix[i][j] !== matr2[i][j]) {
        res2++;
      }
      if (matrix[i][j] !== matr3[i][j]) {
        res3++;
      }
      if (matrix[i][j] !== matr4[i][j]) {
        res4++;
      }
      if (matrix[i][j] !== matr5[i][j]) {
        res5++;
      }
      if (matrix[i][j] !== matr6[i][j]) {
        res6++;
      }
    };
  };
  result = 0;
  console.log(res1, ' ', res2, ' ', res3, ' ', res4, ' ', res5, ' ', res6)
  minRes = Math.min(res1, res2, res3, res4, res5, res6);
    switch (minRes) {
      case res1:
        result = 1;
        break;
      case res2:
        result = 2;
        break;
      case res3:
        result = 3;
        break;
      case res4:
        result = 4;
        break;
      case res5:
        result = 5;
        break;
      case res6:
        result = 6;
        break;
      case res7:
        result = 7;
        break;
      case res8:
        result = 8;
        break;
    };
    return result;
}