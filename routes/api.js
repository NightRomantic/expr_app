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

  return router;
};
