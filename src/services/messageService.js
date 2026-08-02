const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const ApiError = require("../utils/ApiError");

const saveMessage = async ({
    conversationId,
    senderId,
    text
}) => {

    // Validate
    if (!conversationId) {
        throw new ApiError(400, "Conversation ID is required");
    }

    if (!text) {
        throw new ApiError(400, "Message text is required");
    }

    // Check Conversation
    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
        throw new ApiError(404, "Conversation not found");
    }

    // Save Message
    const message = await Message.create({
        conversation: conversationId,
        sender: senderId,
        text
    });

    // Update Conversation
    conversation.lastMessage = message.text;
    conversation.lastMessageTime = message.createdAt;

    await conversation.save();

    // Populate Sender
    await message.populate(
        "sender",
        "name email avatar"
    );

    return message;

};

module.exports = {
    saveMessage
};