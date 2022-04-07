//const express = require('express');
//const today = require('../util/helper.js')
const format = require('../validator/formatter.js')

const router = express.Router();
//problem1
router.get('/test-me', function (req, res) {
    console.log('Welcome to my application. I am shrikant and part of Functionup uranium.')
    console.log('the end poit value is' logger.endpoint)
    console.log('Calling welcome')
    today.cur()
    res.send('my first ever api!')
});
//problem2
router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    console.log("prints the current date: " + today.printDate())
    console.log("prints the current month: " + today.printMonth())
    console.log("Uranium, week2, day16, the topic for today is nodejs module system ")
    
    res.send('My second ever api!')
});

//problem3
router.get('/test-me3', function (req, res) {
    console.log()
    res.send('i am shrikant'+'my third api!')
    format.trimming();
});
//problem 4
router.get('/test-me5', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason