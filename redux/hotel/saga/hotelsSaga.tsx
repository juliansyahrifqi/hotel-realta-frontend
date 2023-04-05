import ApiMethodHotel from '@/api/hotel/apiMethodHotel'
import { call, put } from 'redux-saga/effects'
import {
  doAddHotelsResponse,
  doGetHotelsResponse,
  doGetSearchHotelsResponse,
} from '../action/actionReducer'
import Search from '@/components/Search'

function* handleGetAllHotels(action: any): any {
  try {
    const { pageNumber, pageSize, search } = action.payload
    const result = yield call(
      ApiMethodHotel.getAllHotels,
      pageNumber,
      pageSize,
      search
    )
    yield put(doGetHotelsResponse(result.data))
  } catch (error) {
    yield put(doGetHotelsResponse({ message: error }))
  }
}
function* handleSearchAllHotels(action: any): any {
  try {
    const result = yield call(
      ApiMethodHotel.getAllHotelBySearch,
      action.payload
    )
    yield put(doGetSearchHotelsResponse(result.data))
  } catch (error) {
    yield put(doGetSearchHotelsResponse({ message: error }))
  }
}
function* handleAddHotels(action: any): any {
  // console.log(action.payload.city_name)
  // console.log(action.payload)
  try {
    const result = yield call(
      ApiMethodHotel.createHotels,
      action.payload.city_name,
      action.payload
    )
    // console.log(result.data)
    yield put(doAddHotelsResponse(result.data))
  } catch (error) {
    yield put(doAddHotelsResponse({ message: error }))
  }
}
export { handleGetAllHotels, handleAddHotels, handleSearchAllHotels }
