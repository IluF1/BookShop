import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,

    reducers: {
        addItem:(state, action) => {
            state.items.push = action.payload
        },
        removeItem:(state, action) => {
            state.items.filter != action.payload
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer