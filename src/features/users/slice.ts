import { createSlice } from '@reduxjs/toolkit'

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
    logged: (state, action) => {
      // console.log(state, action.payload);
      state.name = action.payload.user.name
      state.email = action.payload.user.email
      state.birth = action.payload.user.birth
      state.photos = action.payload.user.photos
      state.settings = action.payload.user.settings
      state.roles = action.payload.user.roles
      state.islogged = true
    },
    logout: (state, action) => {
      state = initialUserState;
    },
    deleteUser: (state) => {
      state = initialUserState;
    },
  },
});
// Reducer
export default slice.reducer
// Actions
export const userActions = slice.actions