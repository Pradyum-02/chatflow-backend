

const Message = require("../models/Message");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const { saveMessage } = require("../services/messageService");

// ======================================
// Send Message
// ======================================

const sendMessage = asyncHandler(async (req, res) => {

    const { conversationId, text } = req.body;

    const message = await saveMessage({
        conversationId,
        senderId: req.user._id,
        text
    });

    return res.status(201).json(

        new ApiResponse(
            201,
            "Message Sent Successfully",
            message
        )

    );

});

// ======================================
// Get Messages
// ======================================

const getMessages = asyncHandler(async (req, res) => {

    const { conversationId } = req.params;

    const messages = await Message.find({
        conversation: conversationId
    })
        .populate(
            "sender",
            "name email avatar"
        )
        .sort({
            createdAt: 1
        });

    return res.status(200).json(

        new ApiResponse(
            200,
            "Messages Retrieved Successfully",
            messages
        )

    );

});

// ======================================
// Upload File
// ======================================

const uploadFile = asyncHandler(async (req, res) => {

    if (!req.file) {
        throw new ApiError(400, "No file uploaded");
    }

    return res.status(200).json(

        new ApiResponse(
            200,
            "File Uploaded Successfully",
            {
                fileUrl: req.file.path,
                fileName: req.file.originalname,
                fileType: req.file.mimetype,
                fileSize: req.file.size
            }
        )

    );

});

module.exports = {
    sendMessage,
    getMessages,
    uploadFile
};