import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: [],
    status: "idle",
    error: null
}

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentLoading: (state) => {
            if (state.status === "idle") {
                state.status = "pending"
            }
        },
        commentReceived: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.comments = action.payload
            }
        },
        commentRequestFailed: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.error = action.payload
            }
        }
    },
})

export const { commentLoading, commentReceived, commentRequestFailed } = commentSlice.actions

export default commentSlice.reducer

export const fetchComment = (id) => async (dispatch) => {
    dispatch(commentLoading())
    try {
        const response = await fetch("https://localhost:7219/Blog/GetComment/" + id)
        const data = await response.json()
        dispatch(commentReceived(data))
        console.log(data)
    } catch (error) {
        dispatch(commentRequestFailed(error))
    }
}