import httpRequest from '../../utils/request'

const categoryCreate = async (category) => {
    // localhost:5000/api/category/add-category 
    const response = await httpRequest.post("/category/add-category", category)
    return response.data
}

const getCategories = async () => {
    // localhost:5000/api/category/get-categories 
    const response = await httpRequest.get("/category/get-categories")
    return response.data
}

const categoryService = {
    categoryCreate,
    getCategories
}

export default categoryService