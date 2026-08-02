const bcrypt = require("bcrypt");

const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const generateToken = require("../utils/generateToken");

// ==============================
// Register
// ==============================

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    const token = generateToken(user._id);

    return res.status(201).json(
        new ApiResponse(
            201,
            "User Registered Successfully",
            {
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            }
        )
    );

});

// ==============================
// Login
// ==============================

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and Password are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(401, "Invalid Credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid Credentials");
    }

    const token = generateToken(user._id);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Login Successful",
            {
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                }
            }
        )
    );

});

const getProfile = asyncHandler(async (req, res) => {

    return res.status(200).json(
        new ApiResponse(
            200,
            "Profile Retrieved Successfully",
            req.user
        )
    );

});

module.exports = {
    registerUser,
    loginUser,
    getProfile
};