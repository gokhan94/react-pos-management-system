import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import orderService from '../order/orderService'
import { toast } from 'react-toastify'

const initialState = {
    orders: [],
    error: false,
    loading: false,
}

export const orderCreate = createAsyncThunk('order/orderCreate', async (order, thunkAPI) => {
    try {
       return await orderService.orderCreate(order)
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getOrders = createAsyncThunk('order/getOrders', async (_, thunkAPI) => {
    try {
       return await orderService.getOrders()
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const removeOrder = createAsyncThunk('product/removeOrder', async (order, thunkAPI) => {
    try {
        return await orderService.removeOrder(order, thunkAPI)
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const orderSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(orderCreate.pending, (state) => {
            state.loading = true
        })
        .addCase(orderCreate.fulfilled, (state, action) => {
            state.loading = false
            toast.success('order created')
        })
        .addCase(orderCreate.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
        .addCase(getOrders.pending, (state) => {
            state.loading = true
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })  
        .addCase(removeOrder.pending, (state) => {
            state.loading = true
        })
        .addCase(removeOrder.fulfilled, (state, action) => {
            state.loading = false
            toast.success('order successfully deleted')
        })
        .addCase(removeOrder.rejected, (state, action) => {
            state.loading = false
            state.error = true
        }) 
    }
})

export default orderSlice.reducer

