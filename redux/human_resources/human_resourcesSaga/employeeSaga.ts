import { call, put } from "redux-saga/effects";
import { doAddEmployeeResponse, doDeleteEmployeeResponse, doGetEmployeeResponse, doUpdateEmployeeResponse } from "../action/employeeActionReducer";
import ApiMethodEmployee from "@/api/human_resources/apiMethodEmployee";

// fungsi untuk menampilkan data employee 
function* handleGetAllEmployee(action: any): any {
  try {
    const { page, limit, search, status } = action.payload;
    const result = yield call(ApiMethodEmployee.getAll, page, limit, search, status);
    yield put(doGetEmployeeResponse(result.data));
  } catch (error) {
    yield put(doGetEmployeeResponse({ message: error }));
  }
}

function* handleAddEmployee(action: any): any {
  try {
    const result = yield call(ApiMethodEmployee.create, action.payload);
    yield put(doAddEmployeeResponse(result.data));
  } catch (error) {
    yield put(doAddEmployeeResponse({ message: error }));
  }
}

// fungsi untuk mengedit data employee
function* handleUpdateEmployee(action: any): any {
  try {
    const result = yield call(ApiMethodEmployee.update, action.payload.id, action.payload.data);
    yield put(doUpdateEmployeeResponse(result.data));
  } catch (error) {
    yield put(doUpdateEmployeeResponse({ message: error }));
  }
}

// fungsi untuk delete data employee
function* handleDeleteEmployee(action: any): any {
  console.log("sagaID", action.payload)
  try {
    const result = yield call(ApiMethodEmployee.remove, action.payload);
    yield put(doDeleteEmployeeResponse(result.data));
  } catch (error) {
    yield put(doDeleteEmployeeResponse({ message: error }));
  }
}

export { handleGetAllEmployee, handleAddEmployee, handleUpdateEmployee, handleDeleteEmployee };
