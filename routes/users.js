const express = require('express');
const router = express.Router();

module.exports = (ctx) => {

  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  return router;
};
