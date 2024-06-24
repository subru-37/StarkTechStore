import { createSlice } from '@reduxjs/toolkit';
type CartItemType = {
  id: number;
  title: string;
  body: string;
  price: number;
  category_title: string;
};
type IniState = {
  products: Array<CartItemType>;
  myProduct: CartItemType | null;
};

const initialState: IniState = {
  products: [
    // {
    //   image: '',
    //   price: '',
    //   discprice: '',
    //   name: '',
    //   summary: '',
    //   desc: '',
    //   quantity: 0,
    //   id: null,
    // },
  ],
  myProduct: null
};
export type { CartItemType };
export type { IniState };

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      const data = action.payload;
      // console.log(data);
      state.products = data;
    },
    getProduct(state, action) {
      const data = action.payload;
      state.myProduct = data;
    },
  },
});

export const { setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
