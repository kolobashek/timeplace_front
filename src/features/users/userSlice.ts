import { combineReducers, createSlice } from '@reduxjs/toolkit'
import loginReducer from '../auth/loginForm/loginFormSlice'

const initialUserState = {
  islogged: false,
  name: '',
  email: '',
  roles: [],
  birth: '',
  country: '',
  settings: {},
  photos: {
    gallery: [],
    profilePic: {}
  },
  session: {
    access_token: '',
    expires_in: ''
  }
}
export interface loginForm {
  email: string,
  password: string
}
// Slice
const slice = createSlice({
  name: 'USER',
  initialState: initialUserState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(state, action.payload);
      state.name = action.payload.user.name
      state.email = action.payload.user.email
      state.birth = action.payload.user.birth
      state.photos = action.payload.user.photos
      state.settings = action.payload.user.settings
      state.roles = action.payload.user.roles
      state.islogged = true
      state.session.access_token = action.payload.token.access_token
      state.session.expires_in = action.payload.token.expires_in
    },
    loginError: (state, action) => {
      console.log('==============error=================');
      console.log(action.payload);
      console.log('====================================');
    },
    logoutSuccess: (state) => {
      state = initialUserState;
    },
  },
});
// Reducer
export default combineReducers({ user: slice.reducer, forms: loginReducer })
// Actions
export const { loginSuccess, logoutSuccess, loginError } = slice.actions