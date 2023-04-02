import ActionTypesUsers from "./actionTypeUsers";

export const doRegister = (payload: any) => {
  return {
    type: ActionTypesUsers.REQ_REGISTER,
    payload,
  };
};

export const doRegisterSuccess = (payload: any) => {
  return {
    type: ActionTypesUsers.REGISTER_SUCCESS,
    payload,
  };
};

export const doRegisterFailed = (payload: any) => {
  return {
    type: ActionTypesUsers.REGISTER_FAILED,
    payload,
  };
};
