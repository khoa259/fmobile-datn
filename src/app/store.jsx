import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
import cartReducer, { getTotal } from "../slice/CartSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
