import ActionTypes from "./actionType";

export const doGetShift = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_GET_SHIFT,
    payload,
  };
};

export const doGetShiftResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_SHIFT_RESPONSE,
    payload,
  };
};

export const doAddShift = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_ADD_SHIFT,
    payload,
  };
};

export const doAddShiftResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_SHIFT_RESPONSE,
    payload,
  };
};

export const doUpdateShift = (...payload: any) => {
  return {
    type: ActionTypes.REQUEST_UPDATE_SHIFT,
    payload,
  };
};

export const doUpdateShiftResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_SHIFT_RESPONSE,
    payload,
  };
};

export const doDeleteShift = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_DELETE_SHIFT,
    payload,
  };
};

export const doDeleteShiftResponse = (payload: any) => {
  return {
    type: ActionTypes.DELETE_SHIFT_RESPONSE,
    payload,
  };
};
