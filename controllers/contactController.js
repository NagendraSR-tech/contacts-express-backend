const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');
//@desc    Get all contacts
//@route   GET /api/contacts
//@access  Private

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    // res.status(200).json({ message: "Get all contacts" });
    res.status(200).json(contacts);
});

//@desc    Create a new contact
//@route   POST /api/contacts
//@access  Private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please provide all required fields");
        // return res.status(400).json({ message: "Please provide all required fields" });
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

//@desc    Get a contact
//@route   GET /api/contacts/:id
//@access  Private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc    Update a contact
//@route   PUT /api/contacts/:id
//@access  Private
const updateContact = asyncHandler(async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json(updatedContact);

    // const contact = await Contact.findById(req.params.id);
    if (!updatedContact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(updatedContact);
});

//@desc    Delete a contact
//@route   DELETE /api/contacts/:id
//@access  Private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndDelete(req.params.id);
    // await contact.deleteOne(); // safer than findByIdAndDelete for instance methods
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
