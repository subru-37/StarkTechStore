import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../supabase/setup';
import {
  getFilteredProducts,
  getProductDeet,
  getProductDetails,
} from '../supabase/routes';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/features/ProductSlice';
import { RootState } from '../app/combine';

const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchProductDetails: builder.query({
      queryFn: async () => {
        const getMyProducts = localStorage.getItem('products');
        // console.log(getMyProducts)
        if (getMyProducts !== null) {
          if (getMyProducts !== 'undefined') {
            // console.log(getMyProducts)
            const myProducts = JSON.parse(getMyProducts);
            if (myProducts.length !== 0) {
              return { data: { data: myProducts } };
            }
          }
        }

        try {
          const data = await getProductDetails();
          //console.log(data, 'new state')
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
    fetchProduct: builder.query({
      queryFn: async (id: number) => {
        try {
          //console.log(id)
          const data = await getProductDeet(id);
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
    fetchFilteredProducts: builder.query({
      queryFn: async ({
        myFilters,
        range,
        categories,
        search,
      }: {
        myFilters: string[];
        range: { low: number; high: number };
        categories: string[];
        search: string;
      }) => {
        // console.log(search.length);
        try {
          const data = await getFilteredProducts(
            myFilters,
            range,
            categories,
            search
          );
          // console.log(data);
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
  }),
});

export const {
  useFetchProductDetailsQuery,
  useFetchProductQuery,
  useFetchFilteredProductsQuery,
} = productDetailsApi;
export default productDetailsApi;
