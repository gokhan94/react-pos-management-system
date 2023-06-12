const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const {createJWT} = require('../utils/jwt')
// @route   /api/auth/register
// @desc    Register  User
const userRegister = async (req, res) => {
    const { name, email, password } = req.body
    
    if (!name || !email) {
        return res.status(404).send("User form empty")
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
         return res.status(404).send("User already exists")
        //throw new Error('User already exists')
    }

    const hashPassword = bcrypt.hashSync(password, 8)

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    
}
// @route   /api/auth/login
// @desc    User Login
const userLogin = async (req, res) => {
    try {
        
        const user = await User.findOne({ email: req.body.email })

        if (!user) return res.status(404).send("User not found")

        // To check a password
        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) return res.status(404).send("Password not found")
   
        const token = createJWT(user._id)
        res.cookie("accessToken", token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        }).status(200)


        res.status(201).json({
            _id:  user.id,
            name: user.name,
            email: user.email,
            admin: user.isAdmin
        })
        
    } catch (e) {
         res.status(500).send("User error")
    }
}

// @route   /api/auth/users
// @desc    All Users
const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(201).json(users)
}

// @route   /api/auth/logout
// @desc    User Logout
const logout = (req, res) => {
  res.cookie('accessToken', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out' });
};

module.exports = {
    userRegister,
    userLogin,
    getAllUsers,
    logout
}