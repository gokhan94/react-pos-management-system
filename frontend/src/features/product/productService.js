import httpRequest from '../../utils/request'

const productCreate = async (product) => {
    // localhost:5000/api/product/add-product 
    const response = await httpRequest.post("/product/add-product", product)
    return response.data
}

const getProducts = async () => {
    // localhost:5000/api/product/all-products
    const response = await httpRequest.get("/product/all-products")
    return response.data
}

const productService = {
    productCreate,
    getProducts
}

export default productService