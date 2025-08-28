const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

router.route("/").post((req, res) => {
    res.status(201).json({ message: "Create a new contact" });
});

router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Get a contact with ID: ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update a contact with ID: ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete a contact with ID: ${req.params.id}` });
});

module.exports = router;