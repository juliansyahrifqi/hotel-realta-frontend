import { call, put } from "redux-saga/effects";
import ApiMethodShift from "@/api/human_resources/apiMethodShift";
import { doAddShiftResponse, doDeleteShiftResponse, doGetShiftResponse, doUpdateShiftResponse } from "../action/shiftActionReducer";

// fungsi untuk menampilkan data shift
function* handleGetAllShift(action: any): any {
  try {
    const result = yield call(ApiMethodShift.getAll);
    yield put(doGetShiftResponse(result.data));
    console.log(result.data)
  } catch (error) {
    yield put(doGetShiftResponse({ message: error }));
  }
}

// fungsi untuk menambahkan data shift
function* handleAddShift(action: any): any {
  try {
    const result = yield call(ApiMethodShift.create, action.payload);
    yield put(doAddShiftResponse(result.data));
  } catch (error) {
    yield put(doAddShiftResponse({ message: error }));
  }
}

// fungsi untuk mengedit data shift
function* handleUpdateShift(action: any): any {
  try {
    const result = yield call(ApiMethodShift.update, action.payload[0], action.payload[1]);
    yield put(doUpdateShiftResponse(result.data));
  } catch (error) {
    yield put(doUpdateShiftResponse({ message: error }));
  }
}

// fungsi untuk delete data shift
function* handleDeleteShift(action: any): any {
  try {
    const result = yield call(ApiMethodShift.remove, action.payload);
    yield put(doDeleteShiftResponse(result.data));
  } catch (error) {
    yield put(doDeleteShiftResponse({ message: error }));
  }
}

export { handleGetAllShift, handleAddShift, handleUpdateShift, handleDeleteShift };
