import { all, takeEvery } from 'redux-saga/effects'
import ActionTypeHotel from '../action/actionTypeHotel'
import { handleGetAllHotels } from './hotelsSaga'

function* watchAll() {
  yield all([takeEvery(ActionTypeHotel.REQ_GET_HOTELS, handleGetAllHotels)])
}
export default watchAll
