const Product = require('../models/productModel');

// @route   /api/product/all-products
// @desc    All Products
const getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(201).json(products)
}

// @route   /api/product/add-product
// @desc    Add Product
const addProduct = async (req, res) => {

    const { name, stock, image, price, category } = req.body
    
    if (!name || !stock || !price || !category ) {
        res.status(400)
        throw new Error('Please fill in the blanks')  
    }

    const product = await Product.create({
        name,
        stock,
        image,
        price,
        category
    })  
        
    res.status(201).json(product)  
}

module.exports = {
    addProduct,
    getAllProducts
}