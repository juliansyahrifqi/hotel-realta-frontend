import ActionTypes from "../action/actionType";

const initialState = {
  shifts: [],
  message: "",
  refresh: "",
};

function shiftReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_SHIFT_RESPONSE:
      return { ...state, shifts: payload, refresh: true };
    case ActionTypes.ADD_SHIFT_RESPONSE:
      return { ...state, message: payload.message, refresh: false };
    case ActionTypes.UPDATE_SHIFT_RESPONSE:
      return { message: payload.message, refresh: false };
    case ActionTypes.DELETE_SHIFT_RESPONSE:
      return {
        message: payload,
        refresh: false,
      };
    default:
      return state;
  }
}

export default shiftReducers;
