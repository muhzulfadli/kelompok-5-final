import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: initialState,
  },
  reducers: {
    addWishlist: (state, action) => {
      state.data = { ...action.payload.userData };
    },
  },
});

export default wishlistSlice;