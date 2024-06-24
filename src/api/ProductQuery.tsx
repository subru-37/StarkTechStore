import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../supabase/setup';
import { getProductDeet, getProductDetails } from '../supabase/routes';

const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchProductDetails: builder.query({
      queryFn: async () => {
        try {
          const data = await getProductDetails();
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
    fetchProduct: builder.query({
      queryFn: async (id: number) => {
        try {
          const data = await getProductDeet(id);
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
  }),
});

export const { useFetchProductDetailsQuery, useFetchProductQuery } = productDetailsApi;
export default productDetailsApi;
