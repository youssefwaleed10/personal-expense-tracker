const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

// Sign in route
router.post("/signin", authController.signIn);

module.exports = router;
