import ActionTypes from "./actionType";

export const doGetJobRole = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_GET_JOBROLE,
    payload,
  };
};

export const doGetJobRoleResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_JOBROLE_RESPONSE,
    payload,
  };
};

export const doAddJobRole = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_ADD_JOBROLE,
    payload,
  };
};

export const doAddJobRoleResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_JOBROLE_RESPONSE,
    payload,
  };
};

export const doUpdateJobRole = (...payload: any) => {
  return {
    type: ActionTypes.REQUEST_UPDATE_JOBROLE,
    payload,
  };
};

export const doUpdateJobRoleResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_JOBROLE_RESPONSE,
    payload,
  };
};

export const doDeleteJobRole = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_DELETE_JOBROLE,
    payload,
  };
};

export const doDeleteJobRoleResponse = (payload: any) => {
  return {
    type: ActionTypes.DELETE_JOBROLE_RESPONSE,
    payload,
  };
};
