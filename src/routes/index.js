var express = require('express');
const usersRoues = require('./users');
var router = express.Router();

router.use('/users', usersRoues);

module.exports = router;