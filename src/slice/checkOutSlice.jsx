import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderProducts } from "../api/orders";

export const addToOrder = createAsyncThunk("checkout/addToOrder", async (dataOrder) => {
  const { data } = await orderProducts(dataOrder);
  console.log(dataOrder);
  return data;
});

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(addToOrder.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default checkoutSlice.reducer;
