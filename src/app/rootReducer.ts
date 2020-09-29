import { combineReducers } from '@reduxjs/toolkit'
import userReduser from '../features/users/userSlice'

const rootReducer = combineReducers({
  auth: userReduser
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer