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
      return { state, hotels: payload.data, refresh: true }
    default:
      return state
  }
}

export default hotelsReducers
