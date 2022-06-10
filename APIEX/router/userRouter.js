const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send(`<h1>Root user - Request</h1>`);
});
router.get("/login", (req, res) => {
  res.send(`<h1>Login user - Request</h1>`);
});
router.get("/registration", (req, res) => {
  res.send(`<h1>Registration user - Request</h1>`);
});
router.get("/Alluser", (req, res) => {
  res.send(`<h1>All user - Request</h1>`);
});

module.exports = router;
