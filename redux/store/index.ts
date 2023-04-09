import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { createLogger } from "redux-logger";
import bookingReducers from "../booking/reducer/bookingReducer";
import facilitiesSupportBookingReducers from "../booking/reducer/facilitiesSupportReducer";
import rootSaga from "../saga";

import otherRoomsReducers from "../booking/reducer/OtherRoomsReducer";



import loginReducers from "../users/reducer/loginReducers";
import registerReducers from "../users/reducer/registerReducers";

import usersReducers from "../users/reducer/userReducers";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  loginReducers,
  registerReducers,
  bookingReducers,
  facilitiesSupportBookingReducers,
  otherRoomsReducers,
  usersReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      .concat(saga),
});

saga.run(rootSaga);



export default store;
