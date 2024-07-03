import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from '../Redux/features/CartSlice';
import FormReducer from '../Redux/features/FormSlice';
import ProductReducer from '../Redux/features/ProductSlice';
import productDetailsApi from '../api/ProductQuery';
import CategoryDetailsApi from '../api/CategoriesQuery';

const rootReducer = combineReducers({
    cart: CartReducer,
    user_details: FormReducer,
    productDetails: ProductReducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [CategoryDetailsApi.reducerPath]: CategoryDetailsApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;