import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../slice/productSlice";
import cartReducer, { getTotal } from "../slice/CartSlice";
import checkoutReducer from "../slice/checkOutSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});
