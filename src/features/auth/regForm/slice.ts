import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface registerState {
  name: string
  surname: string
  email: string
  phone: string
  birthdaydate: Date
  password: string
  message?: string
}

const initialState: registerState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  birthdaydate: new Date(),
  password: '',
}
// export interface registerForm {
//   email: string,
//   password: string
// }

const registerInput = createSlice({
  name: 'REGISTER',
  initialState: initialState,
  reducers: {
    signUp: (state, action) => {
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.birthdaydate = action.payload.birthdaydate
      state.password = action.payload.password
    },
    inputRegArgs: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    registerSuccess: (state, action) => {
      console.log(state, action.payload);
      state.password = ''
    },
    registerError: (state, action) => {
      state.password = ''
      state.message = action.payload.message // перепроверить
      console.log('==============error=================');
      console.log(action.payload);
      console.log('====================================');
    },
  }
})

export const registerActions = registerInput.actions

export const selectEmail = createSelector(
  (state: RootState) => state.auth.regForm.email,
  (email) => email
);
export const selectPassword = createSelector(
  (state: RootState) => state.auth.regForm.password,
  (password) => password
);
export const selectError = createSelector(
  (state: RootState) => state.auth.regForm.message,
  (message) => message
);

export default registerInput.reducer;