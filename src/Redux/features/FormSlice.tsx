import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_details: {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    landmark: '',
    phoneNumber: undefined,
  },
};

export const FormSlice = createSlice({
  name: 'user_details',
  initialState,
  reducers: {
    setUserData(state, action) {
      console.log(action.payload);
      state.user_details = action.payload;
    },
  },
});

export const { setUserData } = FormSlice.actions;

export default FormSlice.reducer;
