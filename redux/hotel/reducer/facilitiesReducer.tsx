import ActionTypeHotel from '../action/actionTypeHotel'

const initialState = {
  facilities: [],
  message: '',
  refresh: '',
}

function facilitiesReducers(state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypeHotel.GET_FACILITIES_RESPONSE:
      return { state, facilities: payload.data, refresh: true }
    case ActionTypeHotel.ADD_FACILITIES_RESPONSE:
      return { ...state, message: payload.message, refresh: false }
    default:
      return state
  }
}

export default facilitiesReducers
