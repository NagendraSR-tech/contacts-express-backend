const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');
//@desc    Get all contacts
//@route   GET /api/contacts
//@access  Public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    // res.status(200).json({ message: "Get all contacts" });
    res.status(200).json(contacts);
});

//@desc    Create a new contact
//@route   POST /api/contacts
//@access  Public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please provide all required fields");
        // return res.status(400).json({ message: "Please provide all required fields" });
    }
    res.status(201).json({ message: "Create a new contact" });
});

//@desc    Get a contact
//@route   GET /api/contacts/:id
//@access  Public
const getContactById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get a contact with ID: ${req.params.id}` });
});

//@desc    Update a contact
//@route   PUT /api/contacts/:id
//@access  Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update a contact with ID: ${req.params.id}` });
});

//@desc    Delete a contact
//@route   DELETE /api/contacts/:id
//@access  Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete a contact with ID: ${req.params.id}` });
});

module.exports = {
    getContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
};
