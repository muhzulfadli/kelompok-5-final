import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'
import productSlice from './product'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer
    }
})

export default store