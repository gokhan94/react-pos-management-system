import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/category/categorySlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
});
