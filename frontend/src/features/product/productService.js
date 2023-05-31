import httpRequest from '../../utils/request'
import { deleteLocalStorageCart } from '../../utils/localStorage'
import { clearCart } from '../cart/cartSlice'

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

const editProduct = async (product) => {
    // localhost:5000/api/product/update-product
    const response = await httpRequest.patch("/product/update-product", product)
    return response.data
}

const categoryProductFilter = async (product) => {
    // localhost:5000/api/product/product-filter
    const { category } = product
    const response = await httpRequest.get("/product/product-filter/" + category)
    return response.data
}

const removeProduct = async (product, thunkAPI) => {
    // localhost:5000/api/product/delete
    const response = await httpRequest.delete("/product/delete/" + product.id)
    deleteLocalStorageCart()
    thunkAPI.dispatch(clearCart())
    return response.data
}

const productService = {
    productCreate,
    getProducts,
    editProduct,
    categoryProductFilter,
    removeProduct
}

export default productService