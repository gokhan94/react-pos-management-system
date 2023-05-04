const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const connectDatabase = require('./config/database')
const { errorHandler} = require('./middleware/errorMiddleware')
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// DATABASE CONNECT
connectDatabase()


const app = express()


const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,  //access-control-allow-credentials:true
}

app.use(cors(corsOptions))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/product', productRoutes)

// Middleware
app.use(errorHandler)

// SERVER SETUP
app.listen(PORT, () => console.log(`server on port ${PORT}`))