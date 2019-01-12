import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../Utility/Types';

// root generator that watches the action dispatched.
export default function* rootSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

const fetchDog = () => axios.get('https://dog.ceo/api/breeds/image/random');

// generator function executes wrt to action dispatched.
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    yield put({ type: API_CALL_SUCCESS, payload: dog });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, payload: error });
  }
}
