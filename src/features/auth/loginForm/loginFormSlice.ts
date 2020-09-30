import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';

export interface loginState {
  email: string;
  password: string;
}

const initialState: loginState = {
  email: '',
  password: '',
}
// export interface loginForm {
//   email: string,
//   password: string
// }

export const loginInput = createSlice({
  name: 'LOGIN',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      console.log(state)
      state.email = action.payload.email
      state.password = action.payload.password
    },
    inputAuthArgs: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    }
  }
})

const { signIn, inputAuthArgs } = loginInput.actions
export const loginActions = { signIn, inputAuthArgs }

export const selectEmail = createSelector(
  (state: RootState) => state.auth.forms.email,
  (email) => email
);
export const selectPassword = createSelector(
  (state: RootState) => state.auth.forms.password,
  (password) => password
);

export default loginInput.reducer;