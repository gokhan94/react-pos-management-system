const User = require('../models/userModel')
const { verifyJWT } = require('../utils/jwt')

const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken

    if (token) {
        try {
            //const decoded = jwt.verify(token, process.env.JWT_KEY)
            const { id } = verifyJWT(token)
            req.user = await User.findById(id).select('-password')
            next()
        
        } catch (error) {
            console.log(error)
            return res.status(404).send("Not auth")
            //res.status(401)
            //throw new Error('Not Auth')
        }
    } else {
            return res.status(404).send("Not token")
        //res.status(401)
        //throw new Error('Not Token')
    }


}

module.exports = { verifyToken }
