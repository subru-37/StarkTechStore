import { createSlice } from '@reduxjs/toolkit';
type IniState = {
  [key: string]: Array<CartItemType>;
};
const initialState : IniState = {
  cart: [
    // {
    //   image: '',
    //   price: '',
    //   discprice: '',
    //   name: '',
    //   summary: '',
    //   desc: '',
    //   quantity: 0,
    //   id: 100000000,
    // },
  ],
};
type CartItemType = {
  image: string;
  price: string;
  discprice: string;
  name: string;
  summary: string;
  desc: string;
  quantity: number;
  id: number;
};
export type {CartItemType}
export type {IniState}
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      //if that action product has already in cart then if block will work
      // console.log(action.payload)
      const itemIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
      state.cart = updatedCart;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeAll(state, action) {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state));
    },

    reduceProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      //console.log(state.cart[itemIndex])
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
        state.cart = updatedCart;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    incrementProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(action.payload)
      if (state.cart[itemIndex].quantity >= 1) {
        state.cart[itemIndex].quantity += 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} = CartSlice.actions;
export default CartSlice.reducer;
