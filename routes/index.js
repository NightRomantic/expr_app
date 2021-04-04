const express = require('express');
const router = express.Router();

module.exports = ({ db }) => {

  router.get('/', (req, res) => {
    db.posts.find({}, function (err, docs) {
      if (err) throw new Error(err);
  
      res.render('index', {
        title: 'Posts list',
        date: Date.now(),
        posts: docs,
      });
    });
  });

  return router;
};
