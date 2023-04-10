import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import orderReducers from "../purchasing/reducer/orderReducer";
import vendorProdReducers from "../purchasing/reducer/prodVendorReducer";
import stockReducers from "../purchasing/reducer/stockReducer";
import vendorReducers from "../purchasing/reducer/vendorReducer";
import rootSaga from "../saga";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  vendorReducers,
  stockReducers,
  vendorProdReducers,
  orderReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger).concat(saga),
});

saga.run(rootSaga);

export default store;
