const express = require('express');
const router = express.Router();
const Nomination = require('../models/Nomination');

router.route('/')

  .get((req, res) => {
    Nomination.find()
    .then(nominations => res.send(nominations))
    .catch(err => res.send(err))
  })

  .post((req, res) => {
    Nomination.create(req.body)
  .then(nomination => res.send(nomination))
  .catch(err => res.send(err))
  })

router.route('/clear')

  .delete((req, res) => {
    Nomination.remove()
    .then(() => res.send('All deleted'))
    .catch(err => res.send(err))
  })


module.exports = router;
