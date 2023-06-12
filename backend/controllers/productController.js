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
        category,
        user: req.user._id
    })  

    res.status(201).json(product)  
}

// @route   /api/product/update-product
// @desc    Update Product
const updateProduct = async (req, res) => { 
    const { product } = req.body
    
    if (product.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('A user can only update the product they added')
    }

    const updateProduct = await Product.findByIdAndUpdate(
        { _id: product.id },
        product,
        { new: true, runValidators: true }
    )
    
    res.status(201).json(updateProduct)
}

// @route   /api/product/product-filter
// @desc    Filter Product
const categoryProductFilter = async (req, res) => { 
    const { category } = req.params
    const filterProduct = await Product.find({ category: category })
    res.status(201).json(filterProduct)
}

const removeProduct = async (req, res) => { 

    const { product: productId } = req.params;

    const product = await Product.findOne({ _id: productId })

    if (!product) {
            res.status(400)
            throw new Error('Please fill in the blanks')  
    }

     if (product.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('A user can only delete the product they added')
    }

    await product.deleteOne()
    res.status(201).json(product)
}

module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    categoryProductFilter,
    removeProduct
}