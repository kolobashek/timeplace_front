import { RootState } from './../../app/store';
import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';

interface inputState {
  value: string;
}

const initialState: inputState = {
  value: '',
}

export const emailInput = createSlice({
  name: 'email',
  initialState,
  reducers: {
    changeEmail: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const passwordInput = createSlice({
  name: 'password',
  initialState,
  reducers: {
    changePassword: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

const { changeEmail } = emailInput.actions
const { changePassword } = passwordInput.actions
export const loginActions = { changeEmail, changePassword }

export const selectEmail = (state: RootState) => state.login.email.value;
export const selectPassword = (state: RootState) => state.login.password.value;

export default combineReducers({ email: emailInput.reducer, password: passwordInput.reducer });