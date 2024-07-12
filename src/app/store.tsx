import { configureStore } from '@reduxjs/toolkit';
import productDetailsApi from '../api/ProductQuery';
import CategoryDetailsApi from '../api/CategoriesQuery';
import rootReducer from './combine';
// import SignUpApi from '../api/AuthQuery';
import ProfileQueryApi from '../api/ProfileQuery';


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productDetailsApi.middleware)
      .concat(CategoryDetailsApi.middleware)
      .concat(ProfileQueryApi.middleware)
});
export type AppDispatch = typeof store.dispatch;
