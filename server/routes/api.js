const express = require('express');
const router = express.Router();

// router.use('/fasts', require('./fasts'));
router.use('/nominations', require('./nominations'));
router.use('/sprints', require('./sprints'));

module.exports = router;
