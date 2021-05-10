import React from 'react'
import ReactDOM from 'react-dom'
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit'
import App from './components/app'
import './index.scss'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import transferReducer from './redux/transfer-filter-redux/transfer-filter-reducer'
import filterReducer from './redux/filter-redux/filter-reducer'
import ticketsReducer from './redux/tickets-redux/tickets-reducer'
import appReducer from './redux/app-redux/app-reducer'

const reducer = combineReducers({
  transferReducer,
  filterReducer,
  ticketsReducer,
  appReducer,
})
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof reducer>
const el = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(el, document.getElementById('root'));

