import ActionTypeHotel from '../action/actionTypeHotel'

const initialState = {
  fasupp: [],
  message: '',
  refresh: '',
}

function facilitiesSupportReducers(state = initialState, action: any) {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case ActionTypeHotel.GET_FACILITIES_SUPPORT_RESPONSE:
      return { ...state, fasupp: payload.data, refresh: true }
    case ActionTypeHotel.ADD_FACILITIES_SUPPORT_RESPONSE:
      return { ...state, message: payload.message, refresh: false }
    case ActionTypeHotel.ADD_FACILITY_SUPPORT_HOTEL_RESPONSE:
      return { ...state, message: payload.message, refresh: false }
    case ActionTypeHotel.UPDATE_FACILITIES_SUPPORT_RESPONSE:
      return { ...state, message: payload.message, refresh: false }
    default:
      return state
  }
}

export default facilitiesSupportReducers
