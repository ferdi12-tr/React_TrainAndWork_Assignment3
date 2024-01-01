import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs: [],
    status: "idle",
    error: null
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        blogLoading: (state) => {
            if (state.status === "idle") {
                state.status = "pending"
            }
        },
        blogReceived: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.blogs = action.payload
            }
        },
        blogRequestFailed: (state, action) => {
            if (state.status === "pending") {
                state.status = "idle"
                state.error = action.payload
            }
        }
    },
})

export const { blogLoading, blogReceived, blogRequestFailed } = blogSlice.actions

export default blogSlice.reducer

export const fetchBlogs = () => async (dispatch) => {
    dispatch(blogLoading())
    try {
        const response = await fetch("http://localhost:3000/Blogs")
        const data = await response.json()
        dispatch(blogReceived(data))
    } catch (error) {
        dispatch(blogRequestFailed(error))
    }
}