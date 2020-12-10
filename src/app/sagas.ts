import { all } from "redux-saga/effects";
import loginWatcher from "../features/auth/loginForm/saga";
import regWatcher from '../features/auth/regForm/saga'

export default function* IndexSaga() {
  yield all([loginWatcher(), regWatcher()])
}