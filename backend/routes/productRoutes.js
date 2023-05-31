const express = require('express')
const router = express.Router()
const { getAllProducts, addProduct, updateProduct, categoryProductFilter, removeProduct } = require('../controllers/productController')
const { verifyToken } = require('../middleware/authMiddleware')

router.get('/all-products', verifyToken, getAllProducts)
router.get('/product-filter/:category', verifyToken, categoryProductFilter)
router.post('/add-product', verifyToken, addProduct)
router.patch('/update-product', verifyToken, updateProduct)
router.delete('/delete/:product', verifyToken, removeProduct)

module.exports = router