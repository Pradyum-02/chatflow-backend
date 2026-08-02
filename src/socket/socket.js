const { Server } = require("socket.io");
const socketAuth = require("./socketAuth");
const { saveMessage } = require("../services/messageService");

let io;

const onlineUsers = new Map();

const initializeSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.use(socketAuth);

    io.on("connection", (socket) => {

        console.log(`🟢 User Connected: ${socket.id}`);

        socket.on("setup", (userId) => {

    onlineUsers.set(userId, socket.id);

    console.log("🟢 User Online:", userId);

    console.log(onlineUsers);

});

// ======================================
// Join Conversation Room
// ======================================

socket.on("joinConversation", (conversationId) => {

    socket.join(conversationId);

    console.log(
        `📥 ${socket.id} joined room ${conversationId}`
    );

});


// ======================================
// Broadcast Message
// ======================================

// ======================================
// Send Message
// ======================================

socket.on("sendMessage", async (data) => {

    try {

        const message = await saveMessage({

            conversationId: data.conversationId,

            senderId: data.senderId,

            text: data.text

        });

        io.to(data.conversationId).emit(

            "receiveMessage",

            message

        );

    } catch (error) {

        console.error(error.message);

    }

});

// ======================================
// Typing Indicator
// ======================================

socket.on("typing", (conversationId) => {

    socket.to(conversationId).emit(
        "typing"
    );

});

socket.on("stopTyping", (conversationId) => {

    socket.to(conversationId).emit(
        "stopTyping"
    );

});

socket.on("disconnect", () => {

    for (const [userId, socketId] of onlineUsers.entries()) {

        if (socketId === socket.id) {

            onlineUsers.delete(userId);

            console.log(`🔴 User Offline: ${userId}`);

            break;

        }

    }

    console.log(onlineUsers);

});

    });

};

const getIO = () => {

    if (!io) {
        throw new Error("Socket.IO is not initialized.");
    }

    return io;

};

module.exports = {
    initializeSocket,
    getIO
};