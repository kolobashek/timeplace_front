import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface loginState {
  email: string;
  password: string;
  message?: string;
}

const initialState: loginState = {
  email: '',
  password: '',
}
// export interface loginForm {
//   email: string,
//   password: string
// }

const loginInput = createSlice({
  name: 'LOGIN',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    inputAuthArgs: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    loginSuccess: (state, action) => {
      console.log(state, action.payload);
      state.password = ''
    },
    loginError: (state, action) => {
      state.password = ''
      state.message = action.payload.message // перепроверить
      console.log('==============error=================');
      console.log(action.payload);
      console.log('====================================');
    },
    logoutSuccess: (state) => {
      state = initialState;
    }
  }
})

export const loginActions = loginInput.actions

export const selectEmail = createSelector(
  (state: RootState) => state.auth.form.email,
  (email) => email
);
export const selectPassword = createSelector(
  (state: RootState) => state.auth.form.password,
  (password) => password
);
export const selectError = createSelector(
  (state: RootState) => state.auth.form.message,
  (message) => message
);

export default loginInput.reducer;