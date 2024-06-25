import { createSlice } from '@reduxjs/toolkit';
type ProductItemType = {
  id: number;
  title: string;
  price: number;
  category_title: string;
  image: string;
};
type IniStateType = {
  products: Array<ProductItemType>;
  myProduct: ProductItemType | null;
};

const initialState: IniStateType = {
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
  myProduct: null,
};
export type { ProductItemType };
export type { IniStateType };

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      const data = action.payload;
      //console.log(data);
      state.products = data;
      localStorage.setItem('products', JSON.stringify(data));
    },
    setProduct(state, action) {
      const data = action.payload;
      //console.log(data)
      state.myProduct = data;
      localStorage.setItem('product', JSON.stringify(data));
    },
  },
});

export const { setProducts, setProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
