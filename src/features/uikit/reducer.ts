import drawerReducer from './drawer/slice'
import { combineReducers } from "@reduxjs/toolkit";

const uikitReducer = combineReducers({
  drawer: drawerReducer
})

export type UikitState = ReturnType<typeof uikitReducer>

export default uikitReducer