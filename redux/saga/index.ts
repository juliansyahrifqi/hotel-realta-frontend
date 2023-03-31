import { fork, all } from 'redux-saga/effects'

import hotelSaga from '../hotel/saga/index'
export default function* rootSaga() {
  yield all([hotelSaga()])

  // code after fork-effect
}
