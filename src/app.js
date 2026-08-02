const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend Starter Kit API is Running 🚀"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "OK",
        message: "Backend Starter Kit is Healthy 🚀"
    });
});
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/conversations", conversationRoutes);
app.use("/api/v1/messages", messageRoutes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);


module.exports = app;