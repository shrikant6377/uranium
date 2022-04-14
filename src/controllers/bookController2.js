const bookModel = require("../models/bookModel2")

const createBook = async function(req,res){
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}


const allBooksList = async function (req, res) {
    let list = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}


const getBooksInYear = async function(req,res){
    let booksByYear = await bookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send({msg: booksByYear})
}

const getXINRBooks = async function(req,res){
    let inrBooks = await bookModel.find({"price.indianPrice" : {$in:[ "100INR", "200INR","500INR"]}} )
        res.send({msg : inrBooks})
}

const getRandomBooks = async function(req,res){
    let randomBook = await bookModel.find({ $or :[ {totalPages:{ $gt: 500   }}]})
    res.send({msg: randomBook })

}

const getParticularBooks = async function(req, res){
    let name = req.query.authorName
    let year = req.query.year
    let bookData = await bookModel.find({$or : [{authorName : name},{year : year}]})
    res.send({msg : bookData})
}

module.exports.createBook = createBook
module.exports.allBookList = allBooksList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBooks =  getXINRBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.getParticularBooks = getParticularBooks