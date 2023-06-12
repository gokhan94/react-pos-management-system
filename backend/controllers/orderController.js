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
            tax,
            payment
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
            tax,
            payment,
            user: req.user._id
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

// @route   /api/order/delete
// @desc    Delete Order
const removeOrder = async (req, res) => {    
    const { order: orderId } = req.params;

    const order = await Order.findOne({ _id: orderId }, {user:1})

    if (!order) {
        res.status(400)
        throw new Error('Please fill in the blanks')  
    }

    if (order.user.toString() !== req.user.id) {
        if (!req.user.isAdmin) {
            res.status(401)
            throw new Error('A user can only delete the product they added')
        }
    }

    await order.deleteOne()
    res.status(201).json(order)
}

module.exports = {
    addOrder,
    getOrders,
    removeOrder
}