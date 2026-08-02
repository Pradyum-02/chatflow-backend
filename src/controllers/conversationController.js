const Conversation = require("../models/Conversation");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

// ======================================
// Create Conversation
// ======================================

const createConversation = asyncHandler(async (req, res) => {

    const { receiverId } = req.body;

    if (!receiverId) {
        throw new ApiError(400, "Receiver ID is required");
    }

    // Search Existing Conversation
    let conversation = await Conversation.findOne({
        isGroup: false,
        participants: {
            $all: [req.user._id, receiverId]
        },
        $expr: {
            $eq: [{ $size: "$participants" }, 2]
        }
    });

    // Return Existing Conversation
    if (conversation) {

        return res.status(200).json(
            new ApiResponse(
                200,
                "Conversation Already Exists",
                conversation
            )
        );

    }

    // Create New Conversation
    conversation = await Conversation.create({

        participants: [
            req.user._id,
            receiverId
        ]

    });

    return res.status(201).json(

        new ApiResponse(
            201,
            "Conversation Created Successfully",
            conversation
        )

    );

});

// ======================================
// Create Group
// ======================================

const createGroup = asyncHandler(async (req, res) => {

    const { groupName, members } = req.body;

    // Validate Input
    if (!groupName) {
        throw new ApiError(400, "Group name is required");
    }

    if (!members || !Array.isArray(members)) {
        throw new ApiError(400, "Members must be an array");
    }

    // Minimum 2 members + logged-in user
    if (members.length < 2) {
        throw new ApiError(
            400,
            "A group requires at least 3 participants"
        );
    }

    // Add logged-in user automatically
    const participants = [
        req.user._id,
        ...members
    ];

    // Create Group
    const group = await Conversation.create({

        participants,

        isGroup: true,

        groupName,

        groupAdmin: req.user._id

    });

    return res.status(201).json(

        new ApiResponse(
            201,
            "Group Created Successfully",
            group
        )

    );

});

// ======================================
// Get My Conversations (Step 1)
// ======================================

const getMyConversations = asyncHandler(async (req, res) => {

    const conversations = await Conversation.find({
        participants: req.user._id
    })
    .populate(
        "participants",
        "name email avatar isOnline lastseen"
    )
    .sort({
        updatedAt: -1
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            "Conversations Retrieved Successfully",
            conversations
        )
    );

});

// ======================================
// Rename Group
// ======================================

const renameGroup = asyncHandler(async (req, res) => {

    const { groupId } = req.params;

    const { groupName } = req.body;

    if (!groupName) {
        throw new ApiError(400, "Group name is required");
    }

    const group = await Conversation.findById(groupId);

    if (!group) {
        throw new ApiError(404, "Group not found");
    }

    if (!group.isGroup) {
        throw new ApiError(400, "This is not a group");
    }

    // Admin Check
    if (
        group.groupAdmin.toString() !==
        req.user._id.toString()
    ) {
        throw new ApiError(
            403,
            "Only group admin can rename the group"
        );
    }

    group.groupName = groupName;

    await group.save();

    return res.status(200).json(

        new ApiResponse(
            200,
            "Group Renamed Successfully",
            group
        )

    );

});

// ======================================
// Add Member
// ======================================

const addMember = asyncHandler(async (req, res) => {

    const { groupId } = req.params;

    const { userId } = req.body;

    if (!userId) {
        throw new ApiError(400, "User ID is required");
    }

    const group = await Conversation.findById(groupId);

    if (!group) {
        throw new ApiError(404, "Group not found");
    }

    if (!group.isGroup) {
        throw new ApiError(400, "This is not a group");
    }

    // Admin Check
    if (
        group.groupAdmin.toString() !==
        req.user._id.toString()
    ) {
        throw new ApiError(
            403,
            "Only group admin can add members"
        );
    }

    // Already Exists?
    if (group.participants.includes(userId)) {
        throw new ApiError(
            400,
            "User is already in the group"
        );
    }

    group.participants.push(userId);

    await group.save();

    await group.populate(
        "participants",
        "name email avatar"
    );

    return res.status(200).json(

        new ApiResponse(
            200,
            "Member Added Successfully",
            group
        )

    );

});

// ======================================
// Remove Member
// ======================================

const removeMember = asyncHandler(async (req, res) => {

    const { groupId } = req.params;

    const { userId } = req.body;

    if (!userId) {
        throw new ApiError(400, "User ID is required");
    }

    const group = await Conversation.findById(groupId);

    if (!group) {
        throw new ApiError(404, "Group not found");
    }

    if (!group.isGroup) {
        throw new ApiError(400, "This is not a group");
    }

    // Admin Check
    if (
        group.groupAdmin.toString() !==
        req.user._id.toString()
    ) {
        throw new ApiError(
            403,
            "Only group admin can remove members"
        );
    }

    // Prevent Admin Removing Himself
    if (
        userId === req.user._id.toString()
    ) {
        throw new ApiError(
            400,
            "Admin must use Leave Group"
        );
    }

    // Member Exists?
    if (!group.participants.includes(userId)) {
        throw new ApiError(
            400,
            "User is not a member"
        );
    }

    group.participants = group.participants.filter(
        participant =>
            participant.toString() !== userId
    );

    await group.save();

    await group.populate(
        "participants",
        "name email avatar"
    );

    return res.status(200).json(

        new ApiResponse(
            200,
            "Member Removed Successfully",
            group
        )

    );

});

// ======================================
// Leave Group
// ======================================

const leaveGroup = asyncHandler(async (req, res) => {

    const { groupId } = req.params;

    const group = await Conversation.findById(groupId);

    if (!group) {
        throw new ApiError(404, "Group not found");
    }

    if (!group.isGroup) {
        throw new ApiError(400, "This is not a group");
    }

    // Is user in group?
    if (
        !group.participants.some(
            participant =>
                participant.toString() === req.user._id.toString()
        )
    ) {
        throw new ApiError(
            400,
            "You are not a member of this group"
        );
    }

    // Remove current user
    group.participants = group.participants.filter(
        participant =>
            participant.toString() !== req.user._id.toString()
    );

    // Delete group if empty
    if (group.participants.length === 0) {

        await Conversation.findByIdAndDelete(groupId);

        return res.status(200).json(

            new ApiResponse(
                200,
                "Group deleted because no members remain"
            )

        );

    }

    await group.save();

    return res.status(200).json(

        new ApiResponse(
            200,
            "You left the group successfully",
            group
        )

    );

});

module.exports = {

    createConversation,

    createGroup,

    renameGroup,

    addMember,

    getMyConversations,

    removeMember,

    leaveGroup

};