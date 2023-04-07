import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { createLogger } from 'redux-logger'
import remeReducers from '../restoSchema/reducer/restoMenuReducer'
import rephoReducers from '../restoSchema/reducer/restoMenuPhotoReducer'
import rootSaga from '../saga'
import ormeReducers from '../restoSchema/reducer/orderMenuReducer'
import ordetReducers from '../restoSchema/reducer/orderMenuDetailReducer'

const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
  remeReducers,
  rephoReducers,
  ormeReducers,
  ordetReducers,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      .concat(saga),
})

saga.run(rootSaga)

export default store
