const express = require("express");

const router = express.Router();
const userService = require("../service/seller");

router.post("/register", userService.registerSeller);
router.post("/login", userService.loginSeller);

module.exports = router;
