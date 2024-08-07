import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import wishReducer from './WishSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer:{
        cart : cartReducer,
        wish : wishReducer
    }
})

setupListeners(store.dispatch)