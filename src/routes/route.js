const express = require('express');
const today = require('../util/helper.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
    console.log('The endpoint value is', logger.endpoint)
    console.log('Calling welcome')
    logger.logging()
    res.send('my first ever api!')
});

router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    console.log( today.printDate())
    console.log( today.printMonth())
    console.log("Uranium, week2, day16, the topic for today is nodejs module system ")
    logger.logging()
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason