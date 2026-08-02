const express = require("express");

const verifyToken = require("../middleware/authMiddleware");

const {
    createConversation,
    createGroup,
    getMyConversations,
    renameGroup,
    addMember,
    removeMember,
    leaveGroup
} = require("../controllers/conversationController");

const router = express.Router();

// ======================================
// One-to-One Conversation
// ======================================

router.post(
    "/",
    verifyToken,
    createConversation
);

// ======================================
// Create Group
// ======================================

router.post(
    "/group",
    verifyToken,
    createGroup
);

// ======================================
// Rename Group
// ======================================

router.patch(
    "/group/:groupId",
    verifyToken,
    renameGroup
);

// ======================================
// Add Member
// ======================================

router.patch(
    "/group/:groupId/add",
    verifyToken,
    addMember
);

// ======================================
// Get My Conversations
// ======================================

router.get(
    "/",
    verifyToken,
    getMyConversations
);

router.patch(
    "/group/:groupId/remove",
    verifyToken,
    removeMember
);

router.patch(
    "/group/:groupId/leave",
    verifyToken,
    leaveGroup
);

module.exports = router;