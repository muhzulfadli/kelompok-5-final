import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: [],
  },
  reducers: {
    getWishlist: (state, action) => {
      state.data = { ...action.payload.userData };
    },
  },
});

export default wishlistSlice;