import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
    status: "idle",
    error: null
}

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {

        addCart: (state, action) => {
            state.carts = [...state.carts, action.payload]
        },

    },
})

export const { addCart } = cartSlice.actions

export default cartSlice.reducer

export const addToCart = (cartObject) => (dispatch) => {
    dispatch(addCart(cartObject))
}