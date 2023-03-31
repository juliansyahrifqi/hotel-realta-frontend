import ApiMethodHotel from '@/api/hotel/apiMethodHotel'
import { call, put } from 'redux-saga/effects'
import { doGetHotelsResponse } from '../action/actionReducer'

function* handleGetAllHotels(): any {
  try {
    const result = yield call(ApiMethodHotel.getAllHotels)
    // console.log(result.data)
    yield put(doGetHotelsResponse(result.data))
  } catch (error) {
    yield put(doGetHotelsResponse({ message: error }))
  }
}
export { handleGetAllHotels }
