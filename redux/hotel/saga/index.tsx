import { all, takeEvery } from 'redux-saga/effects'
import ActionTypeHotel from '../action/actionTypeHotel'
import {
  handleAddHotels,
  handleGetAllHotels,
  handleSearchAllHotels,
} from './hotelsSaga'
// import { handleGetAllFacilitiesSupport } from './facilitiesSupportSaga'
// import { handleGetAllHotelReviews } from './hotelReviewsSaga'
import { handleGetAllFacilities } from './facilitiesSaga'
import { handleGetAllCityHotels } from './cityHotelSaga'

function* watchAll() {
  yield all([
    takeEvery(ActionTypeHotel.REQ_GET_HOTELS, handleGetAllHotels),
    takeEvery(ActionTypeHotel.REQ_GET_FACILITIES, handleGetAllFacilities),
    takeEvery(ActionTypeHotel.REQ_GET_CITY, handleGetAllCityHotels),
    takeEvery(ActionTypeHotel.SEARCH_GET_HOTELS, handleSearchAllHotels),
    takeEvery(ActionTypeHotel.ADD_HOTELS, handleAddHotels),
    // takeEvery(
    //   ActionTypeHotel.REQ_GET_FACILITIES_SUPPORT,
    //   handleGetAllFacilitiesSupport
    // ),
    // takeEvery(ActionTypeHotel.REQ_GET_HOTEL_REVIEWS, handleGetAllHotelReviews),
  ])
}
export default watchAll
