const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel")
 const BookModel= require("../models/bookModel2")
// const UserController= require("../controllers/userController")

const bookController2= require("../controllers/bookController2");
// const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// 11 April
//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)




//  12 April
router.post("/createBook", bookController2.createBook)

router.get("/bookList", bookController2.allBookList)

router.post("/getBooksInYear", bookController2.getBooksInYear)

router.post("/getParticularBooks", bookController2.getParticularBooks)

router.get("/getXINRBooksa", bookController2.getXINRBooks)

router.post("/getRandomBooks", bookController2.getRandomBooks)


module.exports = router;