const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productController')
const middleware = require('../middlewares/allMiddlewares')
const userController = require('../controllers/userController')
const orderController = require('../controllers/orderController')

router.post('/createProduct', productControllers.createProduct)
router.post('/createUser', middleware.mid1, userController.createUser)
router.post('/createOrder', middleware.mid1, orderController.createOrder)



module.exports = router;