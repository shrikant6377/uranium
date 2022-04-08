const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
//problem 1
router.get('/movies', function(req, res){

res.send(arr)
});
let arr=["rang de basnanti", "the shining", "lord of ring", "bartman begins","three idiat"]

//problem2
router.get('/movies/:indexNumber', function(req,res){
    const arr2 =["pk","bahuali","kgf","lagan","attack","dhol"]
    const id = req.params.indexNumber
    if (id<arr2.length){
        res.send(arr2[id])
    }else{
        res.send('use valid index')
}
});

//problem3
router.get('/movies/:indexNumber',function(req, res){
    const value = req.params.indexNumber
    const arr3 =["pk","bahuali","kgf","lagan","attack","dhol"]
    const id = req.params.indexNumber
    if (id<=arr3.length+1){
        res.send(arr3[value])
    }else{
        res.send('use valid index')
}
});

// problem4

router.get('/films', function(req,res) {

    const arr4=[
        {
            "id": 1,
            "name": "the shining"
        },
        {
            "id":2,
            "name": "pk"
        },
        {
            "id":3,
            "name": "lagan"
        },
        {
            "id":4,
            "name": "dhol"
        } ]
res.send(arr4)
    }

//problem5

const moive_object=[

   { "id":1,"name":"the shining"},
    {"id":2,"name":"pk"},
    {"id":3,"name":"lagan"},
    {"id":4,"name":"dhol"}
]
router.get('/films',(req,res)=>res.send(JSON.stringify(moive_object)))


router.get('/missingnub', function(req, res){
    const numArry= [1,2,3,4,5,7,8,9];
    const missing =[]
    for(let i in nubArry){
        let x=nubArry[i] - nubArry[i - 1]
        let diff =1;
        while (diff < x){
            missing.push(numArry[i-1]+diff);
            diff++;
        }
    }
    console.log(missing);
    console.log('I am inside the route handler')
    res.send('my first assignment complete')
});

module.exports = router;
// adding this comment for no reason