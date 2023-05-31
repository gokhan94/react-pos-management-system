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

const orderService = {
    orderCreate,
    getOrders
}

export default orderService