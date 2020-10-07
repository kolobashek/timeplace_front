import { combineReducers } from '@reduxjs/toolkit'
import userReduser from '../features/users/slice'
import authReducer from "../features/auth/slice";
import uikitReducer from '../features/uikit/reducer'
import routesReducer from "../routes/slice";

const rootReducer = combineReducers({
  user: userReduser,
  auth: authReducer,
  uikit: uikitReducer,
  routes: routesReducer,
})

export default rootReducer