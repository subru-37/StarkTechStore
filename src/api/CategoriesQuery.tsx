import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCategories } from '../supabase/routes';

const CategoryDetailsApi = createApi({
  reducerPath: 'CategoryDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      queryFn: async () => {
        try {
          const data = await getCategories();
          ////console.log(data, 'new state')
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    })
  }),
});

export const { useFetchCategoriesQuery } =
  CategoryDetailsApi;
export default CategoryDetailsApi;
