import { all } from "redux-saga/effects";
import loginWatcher from "../features/auth/loginForm/saga";

export default function* IndexSaga() {
  yield all([loginWatcher()])
}