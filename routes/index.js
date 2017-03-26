var express = require('express');
var router = express.Router();

/* GET home page. */
/* Render the index.html from views folder when the string '/' is
*  appended to the URL. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: "Ali" });
});

module.exports = router;
