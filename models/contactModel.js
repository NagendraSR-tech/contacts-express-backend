const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]
    }
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
