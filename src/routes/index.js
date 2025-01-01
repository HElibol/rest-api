var express = require('express');
const usersRoutes = require('./users');
const categoriesRoutes = require('./categories');

var router = express.Router();

router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;