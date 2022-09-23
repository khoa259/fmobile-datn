import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../api/products";
const initialState = {
  items: [],
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
    const { data } = await getAll();
    console.log(data.slice(0,5));
    return data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export default productSlice.reducer;
