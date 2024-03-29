var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("Home");
});

router.get("/registration", function (req, res, next) {
  res.render("registration");
});

router.get("/speakers", function (req, res, next) {
  res.render("speakers");
});
router.get("/program", function (req, res, next) {
  res.render("program");
});

router.get("/help", function (req, res, next) {
  res.render("help");
});

router.get("/payment-details", function (req, res, next) {
  res.render("payment-datails");
});

/* Redirect Links. */
router.get("/ambassadors", function (req, res, next) {
  res.redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScZEtFSbrLPzIZcgkUvBa08Ws17huoK9zCzIQsbDd7_8jPUTA/viewform"
  );
});

// router.get('/registration', function (req, res, next) {
//   res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSfxKXTp6wtp_uhpIHEcn_pLId-qOx8G7kKqSxi77u613Cy1fQ/viewform?usp=sf_link");
// });

router.get("/vip", function (req, res, next) {
  res.redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSdetuRB4Md8AYItNf9ORjQwE2nYmYrEJ70E-6sXkI75GgxHhw/viewform?usp=sf_link"
  );
});

router.get("/fund-reg", function (req, res, next) {
  res.redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSddi88-An_-SQ87PWpYnkt97qY8xsiU6QxphlYc0slVU6MmVQ/viewform?usp=sf_link"
  );
});

router.get("/confirm", function (req, res, next) {
  res.redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScT63bRUXgOvGyk2qnVR5i4NuqezLesNJIOoEAYZn4hXrPTFA/viewform?usp=sf_link"
  );
});

router.get("/egyfund", function (req, res, next) {
  res.redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSfNa2oS8t2FlZ1jv8Aq4Dpmi9ajDnf7wxHSMH7O5sbjyFf-yw/viewform?usp=sf_link"
  );
});

router.get("/program-pdf", function (req, res, next) {
  res.redirect(
    "https://drive.google.com/file/d/1IzezuouSjVGwFsnknaMnjRn3HwMxhIfv/view?usp=sharing"
  );
});

module.exports = router;
