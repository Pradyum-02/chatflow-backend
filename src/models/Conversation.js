const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
    {

        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        ],

        isGroup: {
            type: Boolean,
            default: false
        },

        groupName: {
            type: String,
            default: ""
        },

        groupAvatar: {
            type: String,
            default: ""
        },

        // Group Owner / Admin
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        lastMessage: {
            type: String,
            default: ""
        },

        lastMessageTime: {
            type: Date
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Conversation", conversationSchema);