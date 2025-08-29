const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
