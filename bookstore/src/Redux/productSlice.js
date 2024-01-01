import { createSlice } from '@reduxjs/toolkit'
import { createDispatchHook } from 'react-redux'

const initialState = {
    products: [],
    status: "idle",
    error: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productLoading: (state) => {
            if (state.status === "idle") {
                state.status = "pending"
            }
        },
        productReceived: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.products = action.payload
            }
        },
        productRequestFailed: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.error = action.payload
            }
        }
    },
})

export const { productLoading, productReceived, productRequestFailed } = productSlice.actions

export default productSlice.reducer

export const fetchProducts = () => async (dispatch) => {
    dispatch(productLoading())
    try {
        const response = await fetch("http://localhost:3000/Products")
        const data = await response.json()
        dispatch(productReceived(data))
    } catch (error) {
        dispatch(productRequestFailed(error))
    }
}