import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware()
const reducer = rootReducer
const middleware = [sagaMiddleware]


const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>
export default store