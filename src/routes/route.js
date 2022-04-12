const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController.js")
const mongoose =require("mongoose")
//router.get("/test-me", function (req, res) {
 //   res.send("My first ever api!")
//})

//router.post("/createUser", UserController.createUser  )

router.get("/getBooksData", UserController.getBooksData)

router.post("/createBook",bookController.createBook)


module.exports = router;