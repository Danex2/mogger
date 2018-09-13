//view all of the transmogs
const express = require('express');
const router = express.Router();

//Bring in the user model
const { Post } = require('../../db');

/* ROUTE: /api/view/all
   TYPE: GET
   DESC: Get all transmogs
*/

router.get('/view/all', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'imgLink', 'createdAt', 'class', 'armorType']
  }).then(posts => {
    return res.json(posts);
  });
});

/* ROUTE: /api/view/:id
   TYPE: GET
   DESC: View a single transmog
*/

router.get('/view/:id', (req, res) => {
  Post.findById(req.params.id, {
    attributes: [
      'id',
      'title',
      'imgLink',
      'head',
      'shoulder',
      'chest',
      'back',
      'wrists',
      'hands',
      'waist',
      'legs',
      'feet',
      'weapon',
      'weapon2',
      'notes',
      'class',
      'armorType',
      'createdAt'
    ]
  }).then(post => {
    res.json(post);
  });
});

module.exports = router;
