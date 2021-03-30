const express = require('express');
const router = express.Router();

module.exports = ({ db }) => {

  router.get('/matrix', function (req, res) {
    const matrix = [...Array(8).keys()].map(() => [...Array(8).keys()]);
    res.render('matrix', {
      title: 'Hamming distance',
      matrix,
    });
  });

  return router;
};