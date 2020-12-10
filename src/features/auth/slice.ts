import loginInput from './loginForm/slice'
import regInput from './regForm/slice'
import { combineReducers, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface sessionState {
  access_token: string;
  expires_in: string;
}

const initialState: sessionState = {
  access_token: '',
  expires_in: '',
}

const sessionInput = createSlice({
  name: 'SESSION',
  initialState: initialState,
  reducers: {
    init: (state, action) => {
      state.access_token = action.payload.token.access_token
      state.expires_in = action.payload.token.expires_in
    },
    clear: (state) => {
      state = initialState;
    }
  }
})

export const sessionActions = sessionInput.actions

export const selectToken = createSelector(
  (state: RootState) => state.auth.session.access_token,
  (token) => token
);
export const selectTokenExpires = createSelector(
  (state: RootState) => state.auth.session.expires_in,
  (tokenExpires) => tokenExpires
);

export default combineReducers({ session: sessionInput.reducer, loginForm: loginInput, regForm: regInput });