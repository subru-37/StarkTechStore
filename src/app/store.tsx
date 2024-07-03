import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Redux/features/CartSlice';
import FormReducer from '../Redux/features/FormSlice';
import ProductReducer from '../Redux/features/ProductSlice';
import productDetailsApi from '../api/ProductQuery';
import CategoryDetailsApi from '../api/CategoriesQuery';
import rootReducer from './combine';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productDetailsApi.middleware)
      .concat(CategoryDetailsApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
