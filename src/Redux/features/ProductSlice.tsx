import { createSlice } from '@reduxjs/toolkit';
type ProductItemType = {
  id: number;
  title: string;
  body: string;
  price: number;
  category_title: string;
  image: string;
};
type IniState = {
  products: Array<ProductItemType>;
  myProduct: ProductItemType | null;
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
export type { ProductItemType };
export type { IniState };

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      const data = action.payload;
      console.log(data);
      state.products = data;
    },
    setProduct(state, action) {
      const data = action.payload;
      // console.log(data)
      const products = state.products;
      const cartindex = products.findIndex(
        (item: ProductItemType, index: number) => item.id === data
      );
      console.log(cartindex)
      state.myProduct = state.products[cartindex];
    },
  },
});

export const { setProducts, setProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
