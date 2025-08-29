const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

//@desc    Register a user
//@route   POST /api/users/register
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please provide all required fields");
    }
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already registered");
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`user created: ${user}`);
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data"); //request not valid - not able to create new user
    }

    // Temporary response for testing
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