import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-catalog/cart.slice'
import filtersReducer from './filters-catalog/filters.slice'

const reducers = combineReducers({ cart: cartReducer, filters: filtersReducer })
export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
