const express = require('express');
const router = express.Router();

// router.use('/fasts', require('./fasts'));
router.use('/nominations', require('./nominations'));

module.exports = router;
