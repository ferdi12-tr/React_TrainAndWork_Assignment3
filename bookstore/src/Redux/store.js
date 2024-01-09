import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import blogReducer from './blogSlice'
import categoryReducer from './categorySlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        blogs: blogReducer,
        categories: categoryReducer
    },
})