const Order = require('../models/orderModel')
const Product = require('../models/productModel')
// @route   /api/order/add-order
// @desc    Add Order
const addOrder = async (req, res) => {
  
    const {
            customer,
            country,
            province,
            zipcode,
            phone,
            cartItems,
            subTotal,
            totalAmount,
            tax
    } = req.body


  if (!cartItems || cartItems.length < 1) {
    console.log('No cart items')
    }
    
    const order = await Order.create({
            customer,
            country,
            province,
            zipcode,
            phone,
            cartItems,
            subTotal,
            totalAmount,
            tax
    })

    // product stock update
    cartItems.forEach(async(product) => {
        await Product.findOneAndUpdate(
            {_id: product._id},
            {$inc: {stock: -product.quantity}})
    })

    res.status(201).json(order)  
}

// @route   /api/order/get-orders
// @desc    Get Orders
const getOrders = async (req, res) => { 
    const orders = await Order.find({})
    res.status(201).json(orders)
}

module.exports = {
    addOrder,
    getOrders,
}