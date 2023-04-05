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
      return { state, fasupp: payload.data, refresh: true }
    default:
      return state
  }
}

export default facilitiesSupportReducers
