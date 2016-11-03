import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { transactionsReducer } from '../reducers/transactionsReducer';
import { settingsReducer } from '../reducers/settingsReducer';
import { accountsReducer } from '../reducers/accountsReducer';

const reducers = combineReducers({
  settings: settingsReducer,
  transactions: transactionsReducer,
  accounts: accountsReducer,
})

/*
 * React middleware works on the middle of the flow of a dispatched event and can
 * modify, read, or even cancel it. Logger is helpful for debugging purposes, and
 * redux-thunk allows returning actions as functions for asynchronous actions
 */
const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

// store.dispatch
// store.dispatch({type: "ADD_TRANSACTION", payload: {name: "New Transaction", date: "Date", price: -124}});

export { store };