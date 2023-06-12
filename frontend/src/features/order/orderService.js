import httpRequest from '../../utils/request'

const orderCreate = async (order) => {
    // localhost:5000/api/order/add-order 
    const response = await httpRequest.post("/order/add-order", order)
    return response.data
}

const getOrders = async () => {
    // localhost:5000/api/order/get-orders
    const response = await httpRequest.get("/order/get-orders")
    return response.data
}

const removeOrder = async (order, thunkAPI) => {
    // localhost:5000/api/order/delete
    const response = await httpRequest.delete("/order/delete/" + order._id)
    return response.data
}

const orderService = {
    orderCreate,
    getOrders,
    removeOrder
}

export default orderService