const express = require('express');
const router = express.Router();
const {upload} = require('../helpers/filehelper');

router.post("/upload", upload.single("file"), (req, res) =>{
    res.status(200).json("File has been uploaded.");
});

module.exports = {
    routes: router
}