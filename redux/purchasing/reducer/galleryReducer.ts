import ActionTypes from "../action/actionType";

const initialState = {
  imgGale: [],
  message: "",
  refresh: "",
};

export function galleryReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_STOCK_IMG_RESPONSE:
      return { ...state, imgGale: payload.data, refresh: true };
    default:
      return state;
  }
}

export default galleryReducers;
