import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getProfileDetails } from '../supabase/routes';
// import { LogIn, SignUp } from '../supabase/routes';

const ProfileQuery = createApi({
  reducerPath: 'ProfileQuery',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchProfileDetails: builder.query({
      queryFn: async ({uuid}: {uuid: string}) => {
        try {
          const data = await getProfileDetails(uuid);
          //console.log(data, 'new state')
          return { data };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
  }),
});

export const { useFetchProfileDetailsQuery } = ProfileQuery;
export default ProfileQuery;
