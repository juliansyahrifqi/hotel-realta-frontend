import ActionTypes from "../action/actionType";

const initialState = {
  jobroles: [],
  message: "",
  refresh: "",
};

function jobRoleReducers(state = initialState, action: any) {
  const { type, payload } = action;
//   console.log("cek1", payload)
  switch (type) {
    case ActionTypes.GET_JOBROLE_RESPONSE:
      return { ...state, jobroles: payload, refresh: true };
    case ActionTypes.ADD_JOBROLE_RESPONSE:
      return { ...state, message: payload.message, refresh: false };
    case ActionTypes.UPDATE_JOBROLE_RESPONSE:
      return { message: payload.message, refresh: false };
    case ActionTypes.DELETE_JOBROLE_RESPONSE:
      return {
        message: payload,
        refresh: false,
      };
    default:
      return state;
  }
}

export default jobRoleReducers;
