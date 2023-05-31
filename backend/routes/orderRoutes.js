const express = require('express')
const router = express.Router()
const { addOrder, getOrders } = require('../controllers/orderController')
const { verifyToken } = require('../middleware/authMiddleware')

router.post('/add-order', verifyToken, addOrder)
router.get('/get-orders', verifyToken, getOrders)


module.exports = router