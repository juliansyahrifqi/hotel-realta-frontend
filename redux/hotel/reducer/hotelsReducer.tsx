import ActionTypeHotel from '../action/actionTypeHotel'

const initialState = {
  hotels: [],
  message: '',
  refresh: '',
}

function hotelsReducers(state = initialState, action: any) {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case ActionTypeHotel.GET_HOTELS_RESPONSE:
      return { state, hotels: payload, refresh: true }
    case ActionTypeHotel.SEARCH_HOTELS_RESPONSE:
      return { ...state, hotels: payload.data, refresh: true }
    case ActionTypeHotel.ADD_HOTELS_RESPONSE:
      return { message: payload.message, refresh: false }
    default:
      return state
  }
}

export default hotelsReducers
