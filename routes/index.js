var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Home');
});

/* GET redirect Links. */
router.get('/ambassadors', function (req, res, next) {
  res.redirect("https://docs.google.com/forms/d/e/1FAIpQLScZEtFSbrLPzIZcgkUvBa08Ws17huoK9zCzIQsbDd7_8jPUTA/viewform");
});

module.exports = router;