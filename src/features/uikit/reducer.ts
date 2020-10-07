import drawerReducer from './drawer/slice'
import topBarReducer from "./topBar/slice";
import { combineReducers } from "@reduxjs/toolkit";

const uikitReducer = combineReducers({
  drawer: drawerReducer,
  topBar: topBarReducer,
})

export type UikitState = ReturnType<typeof uikitReducer>

export default uikitReducer