import 'regenerator-runtime/runtime';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import trainsReducer from './reducers/trains';
import trainsApi from './services/trainsApi';
import {
  LOAD_TRAINS_REQUEST,
  LOAD_TRAINS_SUCCESS,
  LOAD_TRAINS_FAIL
} from './types/trains';

function* loadTrainsList(url) {
  try {
    const trains = yield call(trainsApi, url);
    yield put({ type: LOAD_TRAINS_SUCCESS, trains });
  } catch (error) {
    yield put({ type: LOAD_TRAINS_FAIL, error });
    throw error;
  }
}

function* watchRequest() {
  yield takeLatest(LOAD_TRAINS_REQUEST, loadTrainsList);
}

const reducer = combineReducers({
  trainsReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchRequest);

export default store;
