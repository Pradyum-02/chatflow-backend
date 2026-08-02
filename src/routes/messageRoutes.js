const express = require("express");

const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    sendMessage,
    getMessages,
    uploadFile
} = require("../controllers/messageController");

const router = express.Router();

// ======================================
// Upload File
// ======================================

router.post(
    "/upload",
    verifyToken,
    upload.single("file"),
    uploadFile
);

// ======================================
// Send Message
// ======================================

router.post(
    "/",
    verifyToken,
    sendMessage
);

// ======================================
// Get Messages
// ======================================

router.get(
    "/:conversationId",
    verifyToken,
    getMessages
);

module.exports = router;