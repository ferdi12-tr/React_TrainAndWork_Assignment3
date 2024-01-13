import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import blogReducer from './blogSlice'
import categoryReducer from './categorySlice'
import commentReducer from './commentSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        blogs: blogReducer,
        categories: categoryReducer,
        comments: commentReducer,
        carts: cartReducer
    },
})