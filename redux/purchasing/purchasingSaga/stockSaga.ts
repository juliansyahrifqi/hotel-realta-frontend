import apiMethodStock from "@/api/purchasing/apiMethodStock";
import { doAddStockImg, doAddStockImgResponse, doAddStockResponse, doDeleteStock, doDeleteStockResponse, doGetStockImg, doGetStockImgResponse, doGetStockResponse, doGetStodResponse, doStocDetailResponse, doStockListResponse, doUpdateStockDetailResponse, doUpdateStockResponse } from "../action/stockActionReducer";
import { call, put } from "redux-saga/effects";

// GET ALL STOCK
function* handleGetAllStock(action: any): any {
  try {
    const { search, page, limit } = action.payload;
    const result = yield call(apiMethodStock.getAll, search, page, limit);
    yield put(doGetStockResponse(result.data));
  } catch (error) {
    yield put(doGetStockResponse({ message: error }));
  }
}

// ADD STOCK
function* handleAddStock(action: any): any {
  try {
    const result = yield call(apiMethodStock.create, action.payload);
    yield put(doAddStockResponse(result.data));
  } catch (error) {
    yield put(doAddStockResponse({ message: error }));
  }
}

// UPDATE STOCK
function* handleUpdateStock(action: any): any {
  try {
    const result = yield call(apiMethodStock.update, action.payload[0], action.payload[1]);
    yield put(doUpdateStockResponse(result.data));
  } catch (error) {
    yield put(doUpdateStockResponse({ message: error }));
  }
}

// DELETE STOCK
function* handleDeleteStock(action: any): any {
  try {
    const result = yield call(apiMethodStock.remove, action.payload);
    yield put(doDeleteStockResponse(result.data));
  } catch (error) {
    yield put(doDeleteStockResponse({ message: error }));
  }
}

// GET STOCK PROD VENDOR
function* handleStocVendor(): any {
  try {
    const result = yield call(apiMethodStock.getStocksList);
    yield put(doStockListResponse(result.data));
  } catch (error) {
    yield put(doStockListResponse({ message: error }));
  }
}

// GET STOCK IMG
function* handleGetAllStockImg(action: any): any {
  try {
    const { search, page, limit } = action.payload;
    const result = yield call(apiMethodStock.getImg, search, page, limit);
    yield put(doGetStockImgResponse(result.data));
  } catch (error) {
    yield put(doGetStockImgResponse({ message: error }));
  }
}

// ADD STOCK IMG
function* handleAddStockImg(action: any): any {
  try {
    const result = yield call(apiMethodStock.createImg, action.payload);
    yield put(doAddStockImgResponse(result.data));
  } catch (error) {
    yield put(doAddStockImgResponse({ message: error }));
  }
}

// GET ALL DETAIL STOCK
function* handleGetDetStock(action: any): any {
  try {
    const result = yield call(apiMethodStock.findStockDet, action.payload);
    yield put(doStocDetailResponse(result.data));
  } catch (error) {
    yield put(doStocDetailResponse({ message: error }));
  }
}

// UPDATE DETAIL STOCK
function* handleUpdateStockDetail(action: any): any {
  try {
    const result = yield call(apiMethodStock.updateStockDet, action.payload[0], action.payload[1]);
    yield put(doUpdateStockDetailResponse(result.data));
  } catch (error) {
    yield put(doUpdateStockDetailResponse({ message: error }));
  }
}

// function* handleGetAllStod(action: any): any {
//   try {
//     const result = yield call(apiMethodStock.getStockDetail, action.payload);
//     yield put(doGetStodResponse(result.data));
//   } catch (error) {
//     yield put(doGetStodResponse({ message: error }));
//   }
// }

export { handleGetAllStock, handleAddStock, handleUpdateStock, handleDeleteStock, handleStocVendor, handleAddStockImg, handleGetDetStock, handleGetAllStockImg, handleUpdateStockDetail };
