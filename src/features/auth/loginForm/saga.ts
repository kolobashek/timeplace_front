import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { userActions } from "../../users/slice";
import { loginActions, loginState } from './slice';

function* loginHandler(action: { payload: loginState }) {
  try {
    const res = yield call(loginFetch, action.payload)
    const data = res.data
    if (data.success) {
      yield* [put(userActions.logged(data.data)), put(loginActions.loginSuccess(data.data))]
    } else {
      yield put(loginActions.loginError(data))
    }
  } catch (error) {
    throw error
  }
}

export default function* loginWatcher() {
  yield takeEvery(loginActions.signIn, loginHandler)
}


const loginFetch = async ({ email, password }: loginState) => {
  const response = await Axios.post('http://localhost:3456/auth/email/login', {
    email,
    password
  })
  return response
}