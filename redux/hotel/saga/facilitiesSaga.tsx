import ApiMethodHotel from '@/api/hotel/apiMethodHotel'
import { call, put } from 'redux-saga/effects'
import {
  doAddFacilitiesResponse,
  doGetFacilitiesResponse,
  doUpdateFacilitiesResponse,
} from '../action/actionReducer'

function* handleGetAllFacilities(): any {
  try {
    const result = yield call(ApiMethodHotel.getAllFacilities)
    yield put(doGetFacilitiesResponse(result.data))
  } catch (error) {
    yield put(doGetFacilitiesResponse({ message: error }))
  }
}
function* handleAddFacilities(action: any): any {
  console.log('ini datanya si action', action.payload)
  try {
    const result = yield call(ApiMethodHotel.createFacilities, action.payload)
    yield put(doAddFacilitiesResponse(result.data))
  } catch (error) {
    yield put(doAddFacilitiesResponse({ message: error }))
  }
}
function* handleUpdateFacilities(action: any): any {
  console.log('ini datanya si action', action.payload)
  try {
    const result = yield call(
      ApiMethodHotel.updateFacilities,
      action.payload[0],
      action.payload[1]
    )
    yield put(doUpdateFacilitiesResponse(result.data))
  } catch (error) {
    yield put(doUpdateFacilitiesResponse({ message: error }))
  }
}
export { handleGetAllFacilities, handleAddFacilities, handleUpdateFacilities }
