import { call, put } from "redux-saga/effects";
import ApiMethodJobRole from "@/api/human_resources/apiMethodJobRole";
import { doAddJobRoleResponse, doDeleteJobRoleResponse, doGetJobRoleResponse, doUpdateJobRoleResponse } from "../action/jobRoleActionReducer";

// fungsi untuk menampilkan data job role
function* handleGetAllJobRole(action: any): any {
  try {
    const result = yield call(ApiMethodJobRole.getAll);
    yield put(doGetJobRoleResponse(result.data));
    console.log(result.data)
  } catch (error) {
    yield put(doGetJobRoleResponse({ message: error }));
  }
}

// fungsi untuk menambahkan data job role
function* handleAddJobRole(action: any): any {
  try {
    const result = yield call(ApiMethodJobRole.create, action.payload);
    yield put(doAddJobRoleResponse(result.data));
  } catch (error) {
    yield put(doAddJobRoleResponse({ message: error }));
  }
}

// fungsi untuk mengedit data job role
function* handleUpdateJobRole(action: any): any {
  try {
    const result = yield call(ApiMethodJobRole.update, action.payload[0], action.payload[1]);
    yield put(doUpdateJobRoleResponse(result.data));
  } catch (error) {
    yield put(doUpdateJobRoleResponse({ message: error }));
  }
}

// fungsi untuk delete data department
function* handleDeleteJobRole(action: any): any {
  try {
    const result = yield call(ApiMethodJobRole.remove, action.payload);
    yield put(doDeleteJobRoleResponse(result.data));
  } catch (error) {
    yield put(doDeleteJobRoleResponse({ message: error }));
  }
}

export { handleGetAllJobRole, handleAddJobRole, handleUpdateJobRole, handleDeleteJobRole };
