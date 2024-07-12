import { createSlice } from '@reduxjs/toolkit';

export type ProfileType = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  id:string;
  contactId: string;
};
export type contactType = {
  detail_id: string;
  phone_no: string;
  alt_phone_no: string;
  address_id: string;
};
export type addressType = {
  address_id: string;
  h_a_number: string;
  h_a_name: string;
  street_name: string;
  city_village: string;
  district: string;
  state: string;
};

export type authType = {
  profileDetails: ProfileType;
  contactDetails: contactType;
  addressDetails: addressType;
} 
export const authInitialState: authType = {
  profileDetails: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    profilePic: '',
    id:'',
    contactId: '',
  },
  contactDetails: {
    detail_id: '',
    phone_no: '',
    alt_phone_no: '',
    address_id: '',
  },
  addressDetails: {
    address_id: '',
    h_a_number: '',
    h_a_name: '',
    street_name: '',
    city_village: '',
    district: '',
    state: '',
  },
};
// export const initialState: ProfileType = {
//   username: '',
//   email: '',
//   firstName: '',
//   lastName: '',
//   profilePic: '',
//   contactId: '',
// };
export const AuthSlice = createSlice({
  name: 'profile',
  initialState: authInitialState,
  reducers: {
    setProfile(state, action) {
      const data = action.payload;
      state.profileDetails = data;
      localStorage.setItem('profileDetails', JSON.stringify(action.payload));
    },
  },
});
export const { setProfile } = AuthSlice.actions;
export default AuthSlice.reducer;
