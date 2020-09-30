import { combineReducers } from '@reduxjs/toolkit'
import uikitReducer from '../features/uikit/reducer'
import userReduser from '../features/users/userSlice'

const rootReducer = combineReducers({
  auth: userReduser,
  uikit: uikitReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer