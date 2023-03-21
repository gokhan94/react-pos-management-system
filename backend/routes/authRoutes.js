const express = require('express')
const router = express.Router()
const { userRegister, userLogin, deleteUser } = require('../controllers/authController')
const {verifyToken} = require('../middleware/authMiddleware')

router.post('/register', userRegister)
router.post('/login', userLogin)

router.get('/me', verifyToken, deleteUser)


module.exports = router