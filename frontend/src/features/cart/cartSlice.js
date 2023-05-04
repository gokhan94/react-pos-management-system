import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from 'react-toastify'

const initialState = {
    cartItems: [],
    totalCount: 0,
    totalAmount: 0,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer