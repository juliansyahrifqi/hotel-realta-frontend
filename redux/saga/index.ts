import { takeEvery, all } from "redux-saga/effects";
import ActionTypes from "../human_resources/action/actionType";
import { handleAddDepartment, handleDeleteDepartment, handleGetAllDepartment, handleUpdateDepartment } from "../human_resources/human_resourcesSaga/departmentSaga";
import { handleAddEmployee, handleDeleteEmployee, handleGetAllEmployee, handleUpdateEmployee } from "../human_resources/human_resourcesSaga/employeeSaga";
import { handleAddWorkOrders, handleDeleteWorkOrders, handleGetAllWorkOrders, handleUpdateWorkOrders } from "../human_resources/human_resourcesSaga/workOrdersSaga";
import { handleAddWorkOrderDetail, handleDeleteWorkOrderDetail, handleGetAllWorkOrderDetail, handleUpdateWorkOrderDetail } from "../human_resources/human_resourcesSaga/workOrderDetailSaga";
import { handleAddEmployeePayHistory, handleDeleteEmployeePayHistory, handleGetAllEmployeePayHistory, handleUpdateEmployeePayHistory } from "../human_resources/human_resourcesSaga/employeePayHistorySaga";
import { handleAddDepartmentHistory, handleDeleteDepartmentHistory, handleGetAllDepartmentHistory, handleUpdateDepartmentHistory } from "../human_resources/human_resourcesSaga/employeeDepartmentHistorySaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.REQUEST_GET_DEPARTMENT, handleGetAllDepartment),
    takeEvery(ActionTypes.REQUEST_ADD_DEPARTMENT, handleAddDepartment),
    takeEvery(ActionTypes.REQUEST_UPDATE_DEPARTMENT, handleUpdateDepartment),
    takeEvery(ActionTypes.REQUEST_DELETE_DEPARTMENT, handleDeleteDepartment),

    takeEvery(ActionTypes.REQUEST_GET_EMPLOYEE, handleGetAllEmployee),
    takeEvery(ActionTypes.REQUEST_ADD_EMPLOYEE, handleAddEmployee),
    takeEvery(ActionTypes.REQUEST_UPDATE_EMPLOYEE, handleUpdateEmployee),
    takeEvery(ActionTypes.REQUEST_DELETE_EMPLOYEE, handleDeleteEmployee),

    takeEvery(ActionTypes.REQUEST_GET_WORKORDERS, handleGetAllWorkOrders),
    takeEvery(ActionTypes.REQUEST_ADD_WORKORDERS, handleAddWorkOrders),
    takeEvery(ActionTypes.REQUEST_UPDATE_WORKORDERS, handleUpdateWorkOrders),
    takeEvery(ActionTypes.REQUEST_DELETE_WORKORDERS, handleDeleteWorkOrders),

    takeEvery(ActionTypes.REQUEST_GET_WORKORDERDETAIL, handleGetAllWorkOrderDetail),
    takeEvery(ActionTypes.REQUEST_ADD_WORKORDERDETAIL, handleAddWorkOrderDetail),
    takeEvery(ActionTypes.REQUEST_UPDATE_WORKORDERDETAIL, handleUpdateWorkOrderDetail),
    takeEvery(ActionTypes.REQUEST_DELETE_WORKORDERDETAIL, handleDeleteWorkOrderDetail),

    takeEvery(ActionTypes.REQUEST_GET_EMPOLYEEPAYHISTORY, handleGetAllEmployeePayHistory),
    takeEvery(ActionTypes.REQUEST_ADD_EMPOLYEEPAYHISTORY, handleAddEmployeePayHistory),
    takeEvery(ActionTypes.REQUEST_UPDATE_EMPOLYEEPAYHISTORY, handleUpdateEmployeePayHistory),
    takeEvery(ActionTypes.REQUEST_DELETE_EMPOLYEEPAYHISTORY, handleDeleteEmployeePayHistory),

    takeEvery(ActionTypes.REQUEST_GET_EMPOLYEEDEPARTMENTHISTORY, handleGetAllDepartmentHistory),
    takeEvery(ActionTypes.REQUEST_ADD_EMPOLYEEDEPARTMENTHISTORY, handleAddDepartmentHistory),
    takeEvery(ActionTypes.REQUEST_UPDATE_EMPOLYEEDEPARTMENTHISTORY, handleUpdateDepartmentHistory),
    takeEvery(ActionTypes.REQUEST_DELETE_EMPOLYEEDEPARTMENTHISTORY, handleDeleteDepartmentHistory),
  ]);
}

export default watchAll;
