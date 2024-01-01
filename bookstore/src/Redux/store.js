import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import blogReducer from './blogSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        blogs: blogReducer
    },
})