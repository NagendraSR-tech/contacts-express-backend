const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
    // res.send("Welcome to the Contacts API");
    res.status(200).json({ message: "Get all contacts" });
});

app.listen(port, () => {
    //console.log(`Server is running on http://localhost:${port}`)
    console.log(`Server is running on port ${port}`)
})
