const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const connectDatabase = require('./config/database')
const { errorHandler} = require('./middleware/errorMiddleware')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')

// DATABASE CONNECT
connectDatabase()


const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api/auth', authRoutes)

// Middleware
app.use(errorHandler)

// SERVER SETUP
app.listen(PORT, () => console.log(`server on port ${PORT}`))