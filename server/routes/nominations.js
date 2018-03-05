const express = require('express');
const router = express.Router();
const Nomination = require('../models/Nomination');

router.route('/')

  .post((req, res) => {
    console.log('req.body: ', req.body);
    Nomination.create(req.body)
  .then(nomination => res.send(nomination))
  .catch(err => res.send('err'));
  })

  // .put((req, res) => {
  //   const { updatedFast } = req.body;
  //   Fast.findByIdAndUpdate(updatedFast._id, updatedFast, { new: true })
  //   .then(fast => User.findOne({ _id: fast.user[0] }).populate('fasts'))
  //   .then(user => res.send(user))
  //   .catch(err => res.status(400).send(err));
  // })

  .get((req, res) => {
    res.send('sup')
  })

  // .delete((req, res) => {
  //   Fast.remove({})
  //   .then(Fast.find({}))
  //   .then(allFasts => res.send(allFasts))
  //   .catch(err => res.status(400).send(err));
  // });

// router.route('/:id')
//   .get((req, res) => {
//     Fast.find({ user: [req.params.id] })
//   .then(allFasts => res.send(allFasts))
//   .catch(err => res.status(400).send(err));
//   })
//
//   .delete((req, res) => {
//     Fast.findByIdAndRemove(req.params.id)
//     .then(fast => User.findOne({ _id: fast.user[0] }).populate('fasts'))
//     .then(user => res.send(user))
//     .catch(err => res.status(400).send(err));
//   });

module.exports = router;
