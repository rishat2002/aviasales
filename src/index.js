/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import './index.scss';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import transferReducer from './redux/transfer-filter-reducer';
import filterReducer from './redux/filter-reducer';
import thunk from 'redux-thunk';
import ticketsReducer from './redux/tickets-reducer';
import appReducer from './redux/app-reducer';

const reducer = combineReducers({
  transferReducer,
  filterReducer,
  ticketsReducer,
  appReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const el = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(el, document.getElementById('root'));
