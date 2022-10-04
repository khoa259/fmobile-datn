import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getProduct, addPrd, removePrd } from "../api/products";
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

export const addProduct = createAsyncThunk("product/addProduct", async (dataForm) => {
  try {
    const { data } = await addPrd(dataForm);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
  const alert = window.confirm("Bạn có muốn xóa sản phẩm");
  try {
    if (alert) {
      const { data } = await removePrd(id);
      return data;
    }
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
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.items.unshift(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    });
  },
});

export default { productSlice }.reducer;
