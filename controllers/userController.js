const asyncHandler = require("express-async-handler");

//@desc    Register a user
//@route   POST /api/users/register
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register a user" });
});

//@desc    Login a user
//@route   POST /api/users/login
//@access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" });
});

//@desc    Current user info
//@route   GET /api/users/current
//@access  Private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };