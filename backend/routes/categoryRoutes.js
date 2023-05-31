const express = require('express')
const router = express.Router()
const { addCategory, getCategories } = require('../controllers/categoryController')
const { verifyToken } = require('../middleware/authMiddleware')

router.post('/add-category', verifyToken, addCategory)
router.get('/get-categories', verifyToken, getCategories)

module.exports = router