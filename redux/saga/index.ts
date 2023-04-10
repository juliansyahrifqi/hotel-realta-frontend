import { all } from "redux-saga/effects";

import restoSaga from "../restoSchema/restoSaga/index";
import usersSaga from "../users/userSaga/index";
import bookingSaga from "../booking/bookingSaga/index";
import hrSaga from "../human_resources/human_resourcesSaga/index";

export default function* rootSaga() {
  yield all([usersSaga(), bookingSaga(), restoSaga(), hrSaga()]);
}
