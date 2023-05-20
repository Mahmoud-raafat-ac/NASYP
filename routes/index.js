var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Home');
});

/* Redirect Links. */
router.get('/ambassadors', function (req, res, next) {
  res.redirect("https://docs.google.com/forms/d/e/1FAIpQLScZEtFSbrLPzIZcgkUvBa08Ws17huoK9zCzIQsbDd7_8jPUTA/viewform");
});

router.get('/registration', function (req, res, next) {
  res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSfxKXTp6wtp_uhpIHEcn_pLId-qOx8G7kKqSxi77u613Cy1fQ/viewform?usp=sf_link");
});

router.get('/vip', function (req, res, next) {
  res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSdetuRB4Md8AYItNf9ORjQwE2nYmYrEJ70E-6sXkI75GgxHhw/viewform?usp=sf_link");
});

module.exports = router;