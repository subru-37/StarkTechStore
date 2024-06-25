import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../supabase/setup';
import { getProductDeet, getProductDetails } from '../supabase/routes';
import { useSelector } from 'react-redux';

const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchProductDetails: builder.query({
      queryFn: async (check: number) => {
        try {
          //console.log(check)
          if(check === 0){
              const data = await getProductDetails();
              //console.log(data, 'new state')
            return { data };
          }
          else{
            const mydata = useSelector((state: any) => state.productDetails.products);
            //console.log(mydata, 'current state')
            return {mydata}
          }
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
  }),
});

export const { useFetchProductDetailsQuery, useFetchProductQuery } =
  productDetailsApi;
export default productDetailsApi;
