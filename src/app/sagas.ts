import { all } from "redux-saga/effects";
import loginWatcher from "../features/users/loginForm/saga";

export default function* IndexSaga() {
  yield all([loginWatcher()])
}