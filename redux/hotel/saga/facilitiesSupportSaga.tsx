import ApiMethodHotel from '@/api/hotel/apiMethodHotel'
import { call, put } from 'redux-saga/effects'
import { doGetFacilitiesSupportResponse } from '../action/actionReducer'

function* handleGetAllFacilitiesSupport(): any {
  try {
    const result = yield call(ApiMethodHotel.getAllFacilitiesSupport)
    // console.log(result.data)
    yield put(doGetFacilitiesSupportResponse(result.data))
  } catch (error) {
    yield put(doGetFacilitiesSupportResponse({ message: error }))
  }
}
export { handleGetAllFacilitiesSupport }
