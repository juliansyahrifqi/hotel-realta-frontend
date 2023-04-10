import remeReducers from "../restoSchema/reducer/restoMenuReducer";
import rephoReducers from "../restoSchema/reducer/restoMenuPhotoReducer";
import ormeReducers from "../restoSchema/reducer/orderMenuReducer";
import ordetReducers from "../restoSchema/reducer/orderMenuDetailReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bookingReducers from "../booking/reducer/bookingReducer";
import facilitiesSupportBookingReducers from "../booking/reducer/facilitiesSupportReducer";
import loginReducers from "../users/reducer/loginReducers";
import registerReducers from "../users/reducer/registerReducers";
import otherRoomsReducers from "../booking/reducer/OtherRoomsReducer";
import usersReducers from "../users/reducer/userReducers";
import rootSaga from "../saga";
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
  loginReducers,
  registerReducers,
  bookingReducers,
  facilitiesSupportBookingReducers,
  otherRoomsReducers,
  usersReducers,
  remeReducers,
  rephoReducers,
  ormeReducers,
  ordetReducers,
  deptReducers,
  empReducers,
  workOrdersReducers,
  workOrderDetailReducers,
  employeePayHistoryReducers,
  departmentHistoryReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger).concat(saga),
});

saga.run(rootSaga);

export default store;
