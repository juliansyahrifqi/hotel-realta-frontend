import ApiMethodHotel from '@/api/hotel/apiMethodHotel'
import { call, put } from 'redux-saga/effects'
import { doGetFacilitiesResponse } from '../action/actionReducer'

function* handleGetAllFacilities(): any {
  try {
    const result = yield call(ApiMethodHotel.getAllFacilities)
    console.log(result.data)
    yield put(doGetFacilitiesResponse(result.data))
  } catch (error) {
    yield put(doGetFacilitiesResponse({ message: error }))
  }
}
export { handleGetAllFacilities }
