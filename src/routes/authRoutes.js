const express = require("express");

const verifyToken = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getProfile
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", verifyToken, getProfile);

module.exports = router;