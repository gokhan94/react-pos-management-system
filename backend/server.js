const express = require('express')
const dotenv = require('dotenv').config()
const connectDatabase = require('./config/database')
const { errorHandler} = require('./middleware/errorMiddleware')
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// DATABASE CONNECT
connectDatabase()

const app = express()

/*const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,  //access-control-allow-credentials:true
}


app.use(cors(corsOptions))*/
const corsOrigin ={
    
    credentials:true,            
    
}
app.use(cors(corsOrigin))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/product', productRoutes)
app.use('/api/order', orderRoutes)

// Middleware
app.use(errorHandler)

// SERVER SETUP
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server on port ${PORT}`))