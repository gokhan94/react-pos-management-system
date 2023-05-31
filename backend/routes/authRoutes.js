const express = require('express')
const router = express.Router()
const { userRegister, userLogin, getAllUsers, logout } = require('../controllers/authController')

router.post('/register', userRegister)
router.post('/login', userLogin)
router.get('/users', getAllUsers)
router.post('/logout', logout)

module.exports = router