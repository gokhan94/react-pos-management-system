import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import categoryService from '../category/categoryService'
import { toast } from 'react-toastify'

const initialState = {
    categories: [],
    category: '',
    image: '',
    error: false,
    loading: false,
}

export const categoryCreate = createAsyncThunk('category/categoryCreate', async (category, thunkAPI) => {
    try {
       return await categoryService.categoryCreate(category)
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getCategories = createAsyncThunk('category/getCategories', async (_, thunkAPI) => {
    try {
       return await categoryService.getCategories()
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
     handleChange: (state, { payload: { name, value } }) => {
        state[name] = value
    },
    clearValues: () => {
      return {
        ...initialState,
      }
    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(categoryCreate.pending, (state) => {
            state.loading = true
        })
        .addCase(categoryCreate.fulfilled, (state, action) => {
            state.loading = false
            toast.success('category added')
        })
        .addCase(categoryCreate.rejected, (state, action) => {
            state.loading = false
            state.error = true
            //toast.error('category error')
        })
        .addCase(getCategories.pending, (state) => {
            state.loading = true
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })        
    }
})

export const { handleChange, clearValues } = categorySlice.actions;
export default categorySlice.reducer