const jwt = require("jsonwebtoken");

const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const verifyToken = asyncHandler(async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ApiError(401, "Access Denied. No Token Provided.");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
        throw new ApiError(404, "User Not Found");
    }

    req.user = user;

    next();

});

module.exports = verifyToken;