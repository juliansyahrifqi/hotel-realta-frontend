import { combineReducers } from "redux";
import rootSaga from "../saga"
import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";

import { createLogger } from "redux-logger";
import deptReducers from "../human_resources/reducer/departmentReducer";
import empReducers from "../human_resources/reducer/employeeReducer";
import workOrdersReducers from "../human_resources/reducer/workOrdersReducer";
import workOrderDetailReducers from "../human_resources/reducer/workOrderDetailReducer";
import employeePayHistoryReducers from "../human_resources/reducer/employeePayHistoryReducer";
import departmentHistoryReducers from "../human_resources/reducer/employeeDepartmentHistoryReducer";
const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  deptReducers,
  empReducers,
  workOrdersReducers,
  workOrderDetailReducers,
  employeePayHistoryReducers,
  departmentHistoryReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
  .concat(logger)
  .concat(saga),
});

saga.run(rootSaga);

export default store;
