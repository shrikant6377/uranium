const productModel = require('../models/productModel')
const userModel = require('../models/orderModel')
const orderModel = require('../models/orderModel');
const moment = require('moment');

 const createProduct = async function (req, res) {
       let data = req.body
       let dataSaved = await productModel.create(data)
       res.send(  {  msg : dataSaved} )
    };


//     const createUser = async function (req, res) {
//       let data = req.body
//       let data1=req.headers.isfreeappuser
//       data['isFreeAppUser']=data1
//       let data2 = data
//       let dataSaved = await userModel.create(data2)
//       res.send(  {  msg : dataSaved} )
//    };

 

   

       module.exports.createProduct=createProduct
      
    

