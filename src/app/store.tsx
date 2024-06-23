import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Redux/features/CartSlice";
import FormReducer from '../Redux/features/FormSlice';
export const store = configureStore({
    reducer: {
      cart: CartReducer,
      user_details: FormReducer
    },
  });
  