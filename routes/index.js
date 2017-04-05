var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ice Track Inventory Manager', author: "Ali" });
});

module.exports = router;
