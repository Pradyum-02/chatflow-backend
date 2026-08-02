const express = require("express");

const verifyToken = require("../middleware/authMiddleware");

const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/", verifyToken, getAllUsers);

module.exports = router;