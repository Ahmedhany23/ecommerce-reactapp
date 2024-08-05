import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer:{
        cart : cartReducer
    }
})

setupListeners(store.dispatch)