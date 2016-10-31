import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { transaction_data } from '../components/Transactions/TransactionData';

// TODO: move to separate file
const settings_data = {};

// TODO: move to separate file
const transactionsReducer = (state=transaction_data, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [
        ...state,
        action.payload
      ];
    }
  }
  return state;
}

// TODO: move to separate file
const settingsReducer = (state=settings_data, action) => {
  return state;
}

const reducers = combineReducers({
  settings: settingsReducer,
  transactions: transactionsReducer,
})

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

// store.dispatch
store.dispatch({type: "ADD_TRANSACTION", payload: {name: "New Transaction", date: "Date", price: -124}});

export { store };