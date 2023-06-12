import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from '../product/productService'
import { toast } from 'react-toastify'

const initialState = {
    products: [],
    filterProduct: [],
    name: '',
    stock: '',
    image: '',
    price: '',
    category: '',
    error: false,
    loading: false,
    isEditing: false,
    editProductId: '',
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

export const editProduct = createAsyncThunk('product/editProduct', async (product, thunkAPI) => {
    try {
       return await productService.editProduct(product)
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const categoryProductFilter = createAsyncThunk('product/categoryProductFilter', async (product, thunkAPI) => {
    try {
       return await productService.categoryProductFilter(product)
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const removeProduct = createAsyncThunk('product/removeProduct', async (product, thunkAPI) => {
    try {
        return await productService.removeProduct(product, thunkAPI)
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
        setEditProduct: (state, action) => {
            return {...state, isEditing :true, ...action.payload}
        },
        clearValues: () => {
            return {
                ...initialState,
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(productCreate.pending, (state) => {
            state.loading = true
        })
        .addCase(productCreate.fulfilled, (state, action) => {
            state.loading = false
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
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
        .addCase(editProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(editProduct.fulfilled, (state, action) => {
            state.loading = false
            toast.success('update success')
        })
        .addCase(editProduct.rejected, (state, action) => {
            state.loading = false
            state.error = true
            toast.error('error product')
        }) 
        .addCase(categoryProductFilter.pending, (state) => {
            state.loading = true
        })
        .addCase(categoryProductFilter.fulfilled, (state, action) => {
            state.loading = false
            state.filterProduct = action.payload
        })
        .addCase(categoryProductFilter.rejected, (state, action) => {
            state.loading = false
            state.error = true
        }) 
        .addCase(removeProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(removeProduct.fulfilled, (state, action) => {
            state.loading = false
            // update products state
            let removeProduct = state.products.filter(item => item.id !== action.payload.id)
            state.products = removeProduct
            toast.success('product successfully deleted')
        })
        .addCase(removeProduct.rejected, (state, action) => {
            state.loading = false
            state.error = true
        }) 
    }
})

export const { handleChange, setEditProduct, clearValues } = productSlice.actions;
export default productSlice.reducer

