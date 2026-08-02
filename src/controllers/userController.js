const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

// ===================================
// Get All Users
// ===================================

const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find({
        _id: {
            $ne: req.user._id
        }
    }).select("-password");

    return res.status(200).json(
        new ApiResponse(
            200,
            "Users Retrieved Successfully",
            users
        )
    );

});

module.exports = {
    getAllUsers
};