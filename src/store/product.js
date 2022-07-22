import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data = { ...action.payload.userData };
    },
  },
});

export default productSlice;