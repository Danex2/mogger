//upload your transmog
const express = require('express');
const router = express.Router();

//Bring in the user model
const { Post } = require('../../db');

/* ROUTE: /api/post
   TYPE: POST
   DESC: upload transmog
*/

router.post('/post', (req, res) => {
  const postData = {
    title: req.body.title,
    imgLink: req.body.imgLink,
    head: req.body.head,
    shoulder: req.body.head,
    chest: req.body.chest,
    back: req.body.back,
    wrists: req.body.wrists,
    hands: req.body.hands,
    waist: req.body.waist,
    legs: req.body.legs,
    feet: req.body.feet,
    weapon: req.body.weapon,
    weapon2: req.body.weapon2,
    notes: req.body.notes,
    class: req.body.class
  };
  Post.create(postData).then(post => {
    res.json(post);
  });
});

module.exports = router;
