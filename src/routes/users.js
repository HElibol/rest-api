var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('respond with a users resource');
});

module.exports = router;