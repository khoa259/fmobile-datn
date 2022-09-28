import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getProduct } from "../api/products";
const initialState = {
  items: [],
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const { data } = await getAll();
    return data;
  } catch (error) {
    return error.message;
  }
});

export const detail = createAsyncThunk("product/detail", async () => {
  try {
    const { data } = await getProduct();
    return data;
  } catch (error) {
    return error.message;
  }
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

const productDetail = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default { productSlice, productDetail }.reducer;
