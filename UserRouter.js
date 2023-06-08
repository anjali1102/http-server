const express = require("express");
const loginUser = require('./UserController')
const router = express.Router();

router.route("/login").post(loginUser);

module.exports = router;
