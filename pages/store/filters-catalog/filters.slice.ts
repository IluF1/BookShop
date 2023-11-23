import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	category: [],
}
const filters = createSlice({
	name: 'filter',
	initialState,

	reducers: {
		changeCategory: (state, action) => {
			state.category.push = action.payload
		},
	},
})

export const { changeCategory } = filters.actions
export default filters.reducer
