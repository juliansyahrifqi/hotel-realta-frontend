import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { createLogger } from 'redux-logger'
import hotelsReducers from '../hotel/reducer/hotelsReducer'
import rootSaga from '../saga'

const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
  hotelsReducers,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      .concat(saga),
})

saga.run(rootSaga)

export default store
