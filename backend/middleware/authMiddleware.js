const User = require('../models/userModel')
const { verifyJWT } = require('../utils/jwt')

const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken
    if (token) {
        try {
            const { id } = verifyJWT(token)
            req.user = await User.findById(id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            return res.status(404).send("Not auth")
        }
    } else {
            return res.status(404).send("Not token")
    }
}

module.exports = { verifyToken }
