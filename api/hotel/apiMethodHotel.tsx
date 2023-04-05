import axios from '../../config/endpoint'

//=============apiMethod Hotels=================
const getAllHotels = (pageNumber: number, pageSize: number, search: string) => {
  return axios.get(
    `/hotels?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`
  )
}
const getHotelIncludeReviews = () => {
  return axios.get('/hotels/hotel-reviews')
} //Reviews
const getHotelIncludeFacilities = () => {
  return axios.get('/hotels/hotel-room')
} //Facilities
const getHotelIncludeAddress = () => {
  return axios.get('/hotels/hotel-address')
} //Address
const getHotelIncludeSupport = () => {
  return axios.get('/hotels/hotel-support')
} //Support
const getAllHotelBySearch = (search: any) => {
  return axios.get(`/hotels/search?searchQuery=${search}`)
} //Search
const createHotels = (city_name: any, data: any) => {
  console.log(city_name)
  console.log(data)
  return axios.post(`/hotels/${city_name}`, data)
}
const updateHotels = (hotel_id: number, data: any) => {
  return axios.put(`/hotels/${hotel_id}`, data)
}
const updateStatusHotels = (hotel_id: number, data: any) => {
  return axios.put(`/hotels/${hotel_id}`, data)
}
const removeHotels = (hotel_id: number) => {
  return axios.delete(`/hotels/${hotel_id}`)
}
//=============apiMethod City=================
const getAllCityBySearch = () => {
  return axios.get('/city/search')
} //Search
const getAllCity = () => {
  return axios.get('/city')
} //Search
//=============apiMethod Facilities=================
const getAllFacilities = () => {
  return axios.get('/facilities')
}
const getFacilitiesIncludeFacilityPriceHistory = () => {
  return axios.get('/facilities/facility-price-history')
} //Facility Price History
const getFacilitiesIncludeFacilityPhotos = () => {
  return axios.get('/facilities/facility-photos')
} //Facility Photos
const createFacilities = (data: any) => {
  return axios.post('/facilities', data)
}
const updateFacilities = (faci_id: number, data: any) => {
  return axios.put(`/facilities/${faci_id}`, data)
}
const removeFacilities = (faci_id: number) => {
  return axios.delete(`/facilities/${faci_id}`)
}
//=============apiMethod HotelReviews=================
const getAllHotelReviews = () => {
  return axios.get('/hotel-reviews')
}
const getAllHotelReviewsById = (hore_id: number) => {
  return axios.get(`/hotel-reviews/${hore_id}`)
}
const createHotelReviews = (data: any) => {
  return axios.post('/hotel-reviews', data)
}
const updateHotelReviews = (hore_id: number, data: any) => {
  return axios.put(`/hotel-reviews/${hore_id}`, data)
}
const removeHotelReviews = (hore_id: number) => {
  return axios.delete(`/hotel-reviews/${hore_id}`)
}
//=============apiMethod FacilitiesSupport=================
const getAllFacilitiesSupport = () => {
  return axios.get('/facilities-support')
}
const getAllFacilitiesSupportById = (fs_id: number) => {
  return axios.get(`/facilities-support/${fs_id}`)
}
const createFacilitiesSupport = (data: any) => {
  return axios.post('/facilities-support', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
const updateFacilitiesSupport = (fs_id: number, data: any) => {
  return axios.put(`/facilities-support/${fs_id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
const removeFacilitiesSupport = (fs_id: number) => {
  return axios.delete(`/facilities-support/${fs_id}`)
}
//=============apiMethod FacilityPhotos=================
const getAllFacilityPhotos = () => {
  return axios.get('/facility-photos')
}
const createFacilityPhotos = (data: any) => {
  return axios.post('/facility-photos', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
const updateFacilityPhotos = (fapho_id: number, data: any) => {
  return axios.put(`/facility-photos/${fapho_id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
const removeFacilityPhotos = (fapho_id: number) => {
  return axios.delete(`/facility-photos/${fapho_id}`)
}
//=============apiMethod FacilityPriceHistory=================
const getAllFacilityPriceHistory = () => {
  return axios.get('/facility-price-history')
}
// const createFacilityPriceHistory = (data: any) => {
//   return axios.post('/facility-price-history', data)
// }
// const updateFacilityPriceHistory = (faph_id: number, data: any) => {
//   return axios.put(`/facility-price-history/${faph_id}`, data)
// }
const removeFacilityPriceHistory = (faph_id: number) => {
  return axios.delete(`/facility-price-history/${faph_id}`)
}
//=============apiMethod FacilitySupportHotel=================
const getAllFacilitySupportHotel = () => {
  return axios.get('/facility-support-hotel')
}
const createFacilitySupportHotel = (data: any) => {
  return axios.post('/facility-support-hotel', data)
}
const updateFacilitySupportHotel = (fsh_id: number, data: any) => {
  return axios.put(`/facility-support-hotel/${fsh_id}`, data)
}
const removeFacilitySupportHotel = (fsh_id: number) => {
  return axios.delete(`/facility-support-hotel/${fsh_id}`)
}

const ApiMethodHotel = {
  //===HOTEL===
  getAllHotels,
  createHotels,
  updateHotels,
  removeHotels,
  getHotelIncludeReviews,
  getHotelIncludeFacilities,
  getHotelIncludeAddress,
  getHotelIncludeSupport,
  getAllHotelBySearch,
  updateStatusHotels,
  //===CITY===
  getAllCityBySearch,
  getAllCity,
  //===FACILITIES===
  getAllFacilities,
  createFacilities,
  updateFacilities,
  removeFacilities,
  getFacilitiesIncludeFacilityPhotos,
  getFacilitiesIncludeFacilityPriceHistory,
  //===HOTEL REVIEWS===
  getAllHotelReviews,
  createHotelReviews,
  updateHotelReviews,
  removeHotelReviews,
  getAllHotelReviewsById,
  ///===FACILITIES SUPPORT===
  getAllFacilitiesSupport,
  createFacilitiesSupport,
  updateFacilitiesSupport,
  removeFacilitiesSupport,
  getAllFacilitiesSupportById,
  //===FACILITY PHOTOS===
  getAllFacilityPhotos,
  createFacilityPhotos,
  updateFacilityPhotos,
  removeFacilityPhotos,
  //===FACILITY PRICE HISTORY===
  getAllFacilityPriceHistory,
  // createFacilityPriceHistory,
  // updateFacilityPriceHistory,
  removeFacilityPriceHistory,
  //===FACILITY SUPPORT HOTEL===
  getAllFacilitySupportHotel,
  createFacilitySupportHotel,
  updateFacilitySupportHotel,
  removeFacilitySupportHotel,
}
export default ApiMethodHotel
