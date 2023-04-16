import ActionTypes from "./actionType";

export const doGetStock = (search: string, page: number, limit: number) => {
  const payload = {
    search,
    page,
    limit,
  };
  return {
    type: ActionTypes.REQUEST_GET_STOCK,
    payload,
  };
};

export const doGetStockResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_STOCK_RESPONSE,
    payload,
  };
};

export const doAddStock = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_ADD_STOCK,
    payload,
  };
};

export const doAddStockResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_STOCK_RESPONSE,
    payload,
  };
};

export const doUpdateStock = (...payload: any[]) => {
  return {
    type: ActionTypes.REQUEST_UPDATE_STOCK,
    payload,
  };
};

export const doUpdateStockResponse = (...payload: any[]) => {
  return {
    type: ActionTypes.UPDATE_STOCK_RESPONSE,
    payload,
  };
};

export const doDeleteStock = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_DELETE_STOCK,
    payload,
  };
};

export const doDeleteStockResponse = (payload: any) => {
  return {
    type: ActionTypes.DELETE_STOCK_RESPONSE,
    payload,
  };
};

export const doStockList = () => {
  return {
    type: ActionTypes.REQUEST_GET_LIST_STOCK,
  };
};

export const doStockListResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_LIST_STOCK_RESPONSE,
    payload,
  };
};

export const doGetStod = (payload: any) => {
  return {
    type: ActionTypes.GET_STOD_RESPONSE,
    payload,
  };
};

export const doGetStodResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_STOD_RESPONSE,
    payload,
  };
};

// STOCK IMG

export const doAddStockImg = (payload: any) => {
  return {
    type: ActionTypes.REQUEST_ADD_STOCK_IMG,
    payload,
  };
};

export const doAddStockImgResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_STOCK_IMG_RESPONSE,
    payload,
  };
};

export const doGetStockImg = (search: string, page: number, limit: number) => {
  const payload = {
    search,
    page,
    limit,
  };
  return {
    type: ActionTypes.REQUEST_GET_STOCK_IMG,
    payload,
  };
};

export const doGetStockImgResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_STOCK_IMG_RESPONSE,
    payload,
  };
};

// FIND STOCK DETAIL
export const doStockDetail = () => {
  return {
    type: ActionTypes.REQUEST_GET_DET_STOCK,
  };
};

export const doStocDetailResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_DET_STOCK_RESPONSE,
    payload,
  };
};

export const doUpdateStockDetail = (...payload: any[]) => {
  return {
    type: ActionTypes.REQUEST_UPDATE_DET_STOCK,
    payload,
  };
};

export const doUpdateStockDetailResponse = (...payload: any[]) => {
  return {
    type: ActionTypes.UPDATE_DET_STOCK_RESPONSE,
    payload,
  };
};
