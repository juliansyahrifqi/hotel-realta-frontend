import { fork, all } from 'redux-saga/effects'
import restoSaga from '../restoSchema/restoSaga/index'

export default function* rootSaga() {
  yield all([restoSaga()])

  // code after fork-effect
}
