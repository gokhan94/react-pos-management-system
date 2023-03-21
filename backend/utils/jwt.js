const jwt = require('jsonwebtoken')

const createJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '30d' })
}

const verifyJWT = (token) => {
    return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = { createJWT,  verifyJWT }