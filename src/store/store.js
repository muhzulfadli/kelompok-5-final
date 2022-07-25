import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'
import productSlice from './product'
import wishlistSlice from './wishlist'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer,
        wishlist: wishlistSlice.reducer
    }
})

export default store








