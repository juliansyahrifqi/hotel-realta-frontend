import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { createLogger } from "redux-logger";
import regionReducer from "../masterSchema/reducer/regionReducer";
import rootSaga from "../masterSchema/saga";
import servicetaskReducer from "../masterSchema/reducer/servicetaskReducer";
import countryReducer from "../masterSchema/reducer/countryReducer";
import provinceReducer from "../masterSchema/reducer/provinceReducer";
import policyReducer from "../masterSchema/reducer/policyReducer";
import categorygroupReducer from "../masterSchema/reducer/categorygroupReducer";
import priceitemsReducer from "../masterSchema/reducer/priceitemsReducer";
import cityReducer from "../masterSchema/reducer/cityReducer";
import addressReducer from "../masterSchema/reducer/addressReducer";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  regionReducer,
  servicetaskReducer,
  countryReducer,
  provinceReducer,
  policyReducer,
  categorygroupReducer,
  priceitemsReducer,
  cityReducer,
  addressReducer,
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
