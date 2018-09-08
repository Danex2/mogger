//upload your transmog
const express = require('express');
const router = express.Router();

//Bring in the user model
const { Post } = require('../../db');

/* ROUTE: /api/posts/all
   TYPE: GET
   DESC: Get all blog posts
*/

router.get('/all', (req, res) => {
  Post.findAll({
    attributes: [] //find all transmog posts
  }).then(posts => {
    return res.json(posts);
  });
});

/* ROUTE: /api/posts/post
   TYPE: POST
   DESC: Make a blog post
   PROTECTED: true
*/

router.post('/post', (req, res) => {
  const postData = {
    //fill this with post data
  };
  Post.create(postData).then(post => {
    res.json(post);
  });
});

/* ROUTE: /api/posts/post/:id
   TYPE: GET
   DESC: View a single post
   PROTECTED: false
*/

router.get('/post/:id', (req, res) => {
  Post.findById(req.params.id, {
    attributes: ['title', 'text', 'createdAt']
  }).then(post => {
    res.json(post);
  });
});

module.exports = router;
