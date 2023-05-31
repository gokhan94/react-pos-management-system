const Category = require('../models/categoryModel');
// @route   /api/category/add-category
// @desc    Add Category
const addCategory = async (req, res) => {
    const { category, image } = req.body

    if (!category) {
        res.status(400)
        throw new Error('Please add a category and image')  
    }

    const categories = await Category.create({
        category,
        image
    })  
        
    res.status(201).json(categories)  
}

// @route   /api/category/get-categories
// @desc    Get Categories
const getCategories = async (req, res) => { 
    const categories = await Category.find({})
   res.status(200).json(categories)
}

module.exports = {
    addCategory,
    getCategories
}