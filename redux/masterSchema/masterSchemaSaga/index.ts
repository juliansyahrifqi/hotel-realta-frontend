import { takeEvery, all } from "redux-saga/effects";
import ActionTypes from "../action/actionType";
import {
  handleAddRegion,
  handleDelRegion,
  handleGetAllRegion,
  handleUpdateRegion,
} from "./regionSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.GET_REGION, handleGetAllRegion),
    takeEvery(ActionTypes.ADD_REGION, handleAddRegion),
    takeEvery(ActionTypes.UPDATE_REGION, handleUpdateRegion),
    takeEvery(ActionTypes.DEL_REGION, handleDelRegion),
  ]);
}
export default watchAll;
