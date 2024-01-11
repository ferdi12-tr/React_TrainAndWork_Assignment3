import { createSlice } from '@reduxjs/toolkit'

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
        const response = await fetch("https://localhost:7219/Product/AllProducts")
        const data = await response.json()
        console.log(data)
        dispatch(productReceived(data))
    } catch (error) {
        dispatch(productRequestFailed(error))
    }
}