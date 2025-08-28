//@desc    Get all contacts
//@route   GET /api/contacts
//@access  Public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc    Create a new contact
//@route   POST /api/contacts
//@access  Public
const createContact = (req, res) => {
    console.log("The request body is", req.body);
    res.status(201).json({ message: "Create a new contact" });
};

//@desc    Get a contact
//@route   GET /api/contacts/:id
//@access  Public
const getContactById = (req, res) => {
    res.status(200).json({ message: `Get a contact with ID: ${req.params.id}` });
};

//@desc    Update a contact
//@route   PUT /api/contacts/:id
//@access  Public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update a contact with ID: ${req.params.id}` });
};

//@desc    Delete a contact
//@route   DELETE /api/contacts/:id
//@access  Public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete a contact with ID: ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
};
