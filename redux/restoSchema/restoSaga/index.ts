import { takeEvery, all } from 'redux-saga/effects'
import actionTypes from '../action/actionType'
import {
  handleAddReme,
  handleDelReme,
  handleGetAllReme,
  handleSearchReme,
  handleUpdateReme,
} from './restoMenuSaga'
import {
  handleAddRepho,
  handleDelRepho,
  handleGetAllRepho,
  handleUpdateRepho,
} from './restoMenuPhotoSaga'

function* watchAll() {
  yield all([
    // Resto Menu
    takeEvery(actionTypes.REQ_GET_REME, handleGetAllReme),
    takeEvery(actionTypes.ADD_REME, handleAddReme),
    takeEvery(actionTypes.UPDATE_REME, handleUpdateReme),
    takeEvery(actionTypes.DEL_REME, handleDelReme),
    takeEvery(actionTypes.SEARCH_REME, handleSearchReme),

    // Resto Menu Photos
    takeEvery(actionTypes.REQ_GET_REPHO, handleGetAllRepho),
    takeEvery(actionTypes.ADD_REPHO, handleAddRepho),
    takeEvery(actionTypes.UPDATE_REPHO, handleUpdateRepho),
    takeEvery(actionTypes.DEL_REPHO, handleDelRepho),
  ])
}

export default watchAll
