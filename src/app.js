const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

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

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;