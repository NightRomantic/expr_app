function sendMatrix(req, res) {
  const matrix = req.body;
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
  let res1 = res2 = res3 = res4 = res5 = res6 = 0;
  for (let i = 0; i < 8; i+=1) {
    for (let j = 0; j < 8; j+=1) {
      if (matrix[i][j] !== matr1[i][j]) {
        res1 += 1;
      }
      if (matrix[i][j] !== matr2[i][j]) {
        res2 += 1;
      }
      if (matrix[i][j] !== matr3[i][j]) {
        res3 += 1;
      }
      if (matrix[i][j] !== matr4[i][j]) {
        res4 +=1 ;
      }
      if (matrix[i][j] !== matr5[i][j]) {
        res5 += 1;
      }
      if (matrix[i][j] !== matr6[i][j]) {
        res6 += 1;
      }
    };
  };
  let result = 0;
  //console.log(res1, ' ', res2, ' ', res3, ' ', res4, ' ', res5, ' ', res6)
  const minRes = Math.min(res1, res2, res3, res4, res5, res6);
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
  };
  res.json(result);
}

module.exports = sendMatrix;
