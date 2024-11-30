var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json('respond with a users resource');
});

module.exports = router;