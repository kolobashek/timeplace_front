import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { loginError, loginSuccess } from "../../users/userSlice";
import { loginActions, loginState } from './loginFormSlice';

function* loginHandler(action: { payload: loginState }) {
  try {
    const res = yield call(loginFetch, action.payload)
    const data = res.data
    // console.log('====================================');
    // console.log(res);
    // console.log('====================================');
    // const resFormatted = JSON.parse(res)
    if (data.success) {
      yield put(loginSuccess(data.data))
    } else {
      yield put(loginError(data))
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