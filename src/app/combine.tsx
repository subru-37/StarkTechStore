import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from '../Redux/features/CartSlice';
import FormReducer from '../Redux/features/FormSlice';
import ProductReducer from '../Redux/features/ProductSlice';
import productDetailsApi from '../api/ProductQuery';
import CategoryDetailsApi from '../api/CategoriesQuery';
import AuthReducer from '../Redux/features/AuthSlice';
// import SignUpApi from "../api/AuthQuery";
import ProfileQueryApi from '../api/ProfileQuery';

const rootReducer = combineReducers({
    cart: CartReducer,
    user_details: FormReducer,
    productDetails: ProductReducer,
    profile: AuthReducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [CategoryDetailsApi.reducerPath]: CategoryDetailsApi.reducer,
    [ProfileQueryApi.reducerPath]: ProfileQueryApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;