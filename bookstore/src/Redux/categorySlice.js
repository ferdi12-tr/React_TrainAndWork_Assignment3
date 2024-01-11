import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    status: "idle",
    error: null
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryLoading: (state) => {
            if (state.status === "idle") {
                state.status = "pending"
            }
        },
        categoryReceived: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.categories = action.payload
            }
        },
        categoryRequestFailed: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.error = action.payload
            }
        }
    },
})

export const { categoryLoading, categoryReceived, categoryRequestFailed } = categorySlice.actions

export default categorySlice.reducer


export const fetchCategories = () => async (dispatch) => {
    dispatch(categoryLoading())
    try {
        const response = await fetch("https://localhost:7219/Product/AllCategories", {
            headers: {
                accept: 'text/plain',
                ContentType: 'application/json',
                // Authorization: 'Bearer'
            }
        })
        const data = await response.json()
        dispatch(categoryReceived(data))
    } catch (error) {
        dispatch(categoryRequestFailed(error))
    }
}
