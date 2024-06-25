import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Redux/features/CartSlice';
import FormReducer from '../Redux/features/FormSlice';
import ProductReducer from '../Redux/features/ProductSlice';
import productDetailsApi from '../api/ProductQuery';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    user_details: FormReducer,
    productDetails: ProductReducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productDetailsApi.middleware),
});