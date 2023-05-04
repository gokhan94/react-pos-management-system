import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from '../product/productService'
import { toast } from 'react-toastify'

const initialState = {
    products: [],
    name: '',
    stock: '',
    image: '',
    price: '',
    category: '',
    error: false,
    success: false,
    loading: false,
}

export const productCreate = createAsyncThunk('product/productCreate', async (product, thunkAPI) => {
    try {
       return await productService.productCreate(product)
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getProducts = createAsyncThunk('product/getProducts', async (_, thunkAPI) => {
    try {
       return await productService.getProducts()
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
     handleChange: (state, { payload: { name, value } }) => {
        state[name] = value
     },
    },
    extraReducers: (builder) => {
        builder
        .addCase(productCreate.pending, (state) => {
            state.loading = true
        })
        .addCase(productCreate.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            toast.success('product added')
        })
        .addCase(productCreate.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
        .addCase(getProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
     
    }
})

export const { handleChange } = productSlice.actions;
export default productSlice.reducer

