const express = require('express')
const router = express.Router()
const { addCategory, getCategories } = require('../controllers/categoryController')

router.post('/add-category', addCategory)
router.get('/get-categories', getCategories)

module.exports = router