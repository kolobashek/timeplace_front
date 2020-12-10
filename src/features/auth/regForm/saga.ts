// import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ApiFetch } from "scripts";
import { userActions } from "../../users/slice";
import { registerActions, registerState } from './slice';

function* registerHandler(action: { payload: registerState }) {
  try {
    const res = yield call(registerFetch, action.payload)
    const data = res.data
    if (data.success) {
      yield* [put(userActions.logged(data.data)), put(registerActions.registerSuccess(data.data))]
    } else {
      yield put(registerActions.registerError(data))
    }
  } catch (error) {
    throw error
  }
}

export default function* registerWatcher() {
  yield takeEvery(registerActions.signUp, registerHandler)
}


const registerFetch = (body: any) => {
  return (new ApiFetch('/auth/email/register')).post(body)
}
// const registerFetch = async (body: registerState) => {
//   console.log(`saga-fetch = ${JSON.stringify(body)}`)
//   const response = await Axios.post('http://localhost:3000/auth/email/register', body)
//   return response
// }