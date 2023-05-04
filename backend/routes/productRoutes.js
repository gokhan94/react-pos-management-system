const express = require('express')
const router = express.Router()
const { getAllProducts, addProduct } = require('../controllers/productController')

router.get('/all-products', getAllProducts)
router.post('/add-product', addProduct)

module.exports = router