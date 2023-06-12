const express = require('express')
const router = express.Router()
const { addOrder, getOrders, removeOrder } = require('../controllers/orderController')
const { verifyToken } = require('../middleware/authMiddleware')

router.post('/add-order', verifyToken, addOrder)
router.get('/get-orders', verifyToken, getOrders)
router.delete('/delete/:order', verifyToken, removeOrder)

module.exports = router