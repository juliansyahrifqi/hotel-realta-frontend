import ActionTypes from "./actionType";

export const doGetEmployee = (page: number, limit: number, search: string, status: string) => {
  const payload = {
    page,
    limit,
    search,
    status,
  };
  return {
    type: ActionTypes.REQUEST_GET_EMPLOYEE,
    payload,
  };
};

export const doGetEmployeeResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_RESPONSE,
    payload,
  };
};

export const doAddEmployee = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_ADD_EMPLOYEE,
    payload,
  };
};

export const doAddEmployeeResponse = (...payload: any) => {
  return {
    type: ActionTypes.ADD_EMPLOYEE_RESPONSE,
    payload,
  };
};

export const doUpdateEmployee = (...payload: any) => {
  return {
    type: ActionTypes.REQUEST_UPDATE_EMPLOYEE,
    payload,
  };
};

export const doUpdateEmployeeResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_EMPLOYEE_RESPONSE,
    payload,
  };
};

export const doDeleteEmployee = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_DELETE_EMPLOYEE,
    payload,
  };
};

export const doDeleteEmployeeResponse = (payload: any) => {
  console.log("respon", payload);
  return {
    type: ActionTypes.DELETE_EMPLOYEE_RESPONSE,
    payload,
  };
};
