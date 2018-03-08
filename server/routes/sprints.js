const express = require('express');
const router = express.Router();
const Sprint = require('../models/Sprint');

router.route('/')

  .get((req, res) => {
    Sprint.find()
    .then(nominations => res.send(nominations))
    .catch(err => res.send(err))
  })

  .post((req, res) => {
    Sprint.create(req.body)
  .then(nomination => res.send(nomination))
  .catch(err => res.send(err))
  })

router.route('/clear')

  .delete((req, res) => {
    Sprint.remove()
    .then(() => res.send('All deleted'))
    .catch(err => res.send(err))
  })


module.exports = router;
