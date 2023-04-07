import ActionTypeHotel from './actionTypeHotel'

//====================HOTELS=======================
export const doRequestGetHotels = (
  pageNumber: number,
  pageSize: number,
  search: string
) => {
  const payload = {
    pageNumber,
    pageSize,
    search,
  }
  return {
    type: ActionTypeHotel.REQ_GET_HOTELS,
    payload,
  }
}
export const doGetHotelsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_HOTELS_RESPONSE,
    payload,
  }
}
export const doRequestGetSearchHotels = (payload: any) => {
  return {
    type: ActionTypeHotel.SEARCH_GET_HOTELS,
    payload,
  }
}
export const doGetSearchHotelsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.SEARCH_HOTELS_RESPONSE,
    payload,
  }
}
export const doAddHotels = (payload: any) => {
  // console.log(payload)
  return {
    type: ActionTypeHotel.ADD_HOTELS,
    payload,
  }
}
export const doAddHotelsResponse = (payload: any) => {
  // console.log(payload)
  return {
    type: ActionTypeHotel.ADD_HOTELS_RESPONSE,
    payload,
  }
}
export const doUpdateHotels = (...payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTELS,
    payload,
  }
}
export const doUpdateHotelsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTELS_RESPONSE,
    payload,
  }
}
export const doSwitchHotels = (...payload: any) => {
  return {
    type: ActionTypeHotel.SWITCH_STATUS_HOTELS,
    payload,
  }
}
export const doSwitchHotelsResponse = (payload: any) => {
  console.log(payload)
  return {
    type: ActionTypeHotel.SWITCH_STATUS_HOTELS_RESPONSE,
    payload,
  }
}
export const doDeleteHotels = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTELS,
    payload,
  }
}
export const doDeleteHotelsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTELS_RESPONSE,
    payload,
  }
}

//====================MASTER MODULE=======================
export const doRequestGetCity = () => {
  return {
    type: ActionTypeHotel.REQ_GET_CITY,
  }
}
export const doGetCityResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_CITY_RESPONSE,
    payload,
  }
}
export const doRequestGetCategory = () => {
  return {
    type: ActionTypeHotel.REQ_GET_CATEGORY,
  }
}
export const doGetCategoryResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_CATEGORY_RESPONSE,
    payload,
  }
}
export const doRequestGetMembers = () => {
  return {
    type: ActionTypeHotel.REQ_GET_MEMBERS,
  }
}
export const doGetMembersResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_MEMBERS_RESPONSE,
    payload,
  }
}
//====================FACILITIES=======================
export const doRequestGetFacilities = () => {
  return {
    type: ActionTypeHotel.REQ_GET_FACILITIES,
  }
}
export const doGetFacilitiesResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_FACILITIES_RESPONSE,
    payload,
  }
}
export const doAddFacilities = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_FACILITIES,
    payload,
  }
}
export const doAddFacilitiesResponse = (payload: any) => {
  console.log(payload)
  return {
    type: ActionTypeHotel.ADD_FACILITIES_RESPONSE,
    payload,
  }
}
export const doUpdateFacilities = (...payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES,
    payload,
  }
}
export const doUpdateFacilitiesResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES_RESPONSE,
    payload,
  }
}
export const doDeleteFacilities = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES,
    payload,
  }
}
export const doDeleteFacilitiesResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES_RESPONSE,
    payload,
  }
}
//====================HOTEL REVIEWS=======================

export const doRequestGetHotelReviews = () => {
  return {
    type: ActionTypeHotel.REQ_GET_HOTEL_REVIEWS,
  }
}
export const doGetHotelReviewsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_HOTEL_REVIEWS_RESPONSE,
    payload,
  }
}
export const doAddHotelReviews = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_HOTEL_REVIEWS,
    payload,
  }
}
export const doAddHotelReviewsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_HOTEL_REVIEWS_RESPONSE,
    payload,
  }
}
export const doUpdateHotelReviews = (...payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTEL_REVIEWS,
    payload,
  }
}
export const doUpdateHotelReviewsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTEL_REVIEWS_RESPONSE,
    payload,
  }
}
export const doDeleteHotelReviews = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTEL_REVIEWS,
    payload,
  }
}
export const doDeleteHotelReviewsResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_HOTEL_REVIEWS_RESPONSE,
    payload,
  }
}
//====================FACILITIES SUPPORT=======================

export const doRequestGetFacilitiesSupport = () => {
  return {
    type: ActionTypeHotel.REQ_GET_FACILITIES_SUPPORT,
  }
}
export const doGetFacilitiesSupportResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_FACILITIES_SUPPORT_RESPONSE,
    payload,
  }
}
export const doAddFacilitiesSupport = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_FACILITIES_SUPPORT,
    payload,
  }
}
export const doAddFacilitiesSupportResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_FACILITIES_SUPPORT_RESPONSE,
    payload,
  }
}
export const doUpdateFacilitiesSupport = (...payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES_SUPPORT,
    payload,
  }
}
export const doUpdateFacilitiesSupportResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES_SUPPORT_RESPONSE,
    payload,
  }
}
export const doDeleteFacilitiesSupport = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES_SUPPORT,
    payload,
  }
}
export const doDeleteFacilitiesSupportResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITIES_SUPPORT_RESPONSE,
    payload,
  }
}
//====================FACILITY PHOTOS=======================

export const doRequestGetFacilityPhotos = () => {
  return {
    type: ActionTypeHotel.REQ_GET_FACILITY_PHOTOS,
  }
}
export const doGetFacilityPhotosResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.GET_FACILITY_PHOTOS_RESPONSE,
    payload,
  }
}
export const doAddFacilityPhotos = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_FACILITY_PHOTOS,
    payload,
  }
}
export const doAddFacilityPhotosResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.ADD_FACILITY_PHOTOS_RESPONSE,
    payload,
  }
}
export const doUpdateFacilityPhotos = (...payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITY_PHOTOS,
    payload,
  }
}
export const doUpdateFacilityPhotosResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITY_PHOTOS_RESPONSE,
    payload,
  }
}
export const doDeleteFacilityPhotos = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITY_PHOTOS,
    payload,
  }
}
export const doDeleteFacilityPhotosResponse = (payload: any) => {
  return {
    type: ActionTypeHotel.UPDATE_FACILITY_PHOTOS_RESPONSE,
    payload,
  }
}

//====================FACILITIES=======================
