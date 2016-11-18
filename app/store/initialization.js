import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { transactionsReducer } from '../reducers/transactionsReducer';
import { settingsReducer } from '../reducers/settingsReducer';
import { accountsReducer } from '../reducers/accountsReducer';
import { authReducer } from '../reducers/authReducer';
import { seedReducer } from '../reducers/seedReducer';

const reducers = combineReducers({
  settings: settingsReducer,
  transactions: transactionsReducer,
  accounts: accountsReducer,
  auth: authReducer,
  seeds: seedReducer
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

// Setting up the data
axios.get('/api/transactions')
  .then((res) => {
    let transaction_data = res.data;
    initializeTransactionData(transaction_data);
  })
  .catch((err) => {
    console.log(err);
  });

axios.get('/api/seeds')
  .then((res)=> {
    let seed_data = res.data;
    initializeSeedData(seed_data);
  })
  .catch((err) => {
    console.log(err);
  });

axios.get('/api/accounts/get')
  .then((res) => {
    let accounts_data = res.data;
    initializeAccountsData(accounts_data);
  })
  .catch((err) => {
    console.log(err);
  })

/* Adding the data.json data, Redux style */
function initializeTransactionData(transaction_data) {
  // transaction_data.forEach(function(val, i) {
  //   store.dispatch({type: "ADD_TRANSACTION", payload: val});
  // });
  store.dispatch({type: "ADD_TRANSACTIONS", payload: transaction_data});
}

function initializeSeedData(seed_data) {
  seed_data.forEach(function(val, i) {
    store.dispatch({type: "CREATE_SEED", payload: val});
  })
}

function initializeAccountsData(accounts_data) {
  accounts_data.forEach(function(val, i) {
    store.dispatch({type: "ADD_ACCOUNT", payload: val});
  })
}

//  

// Comment this out if you want to start with login
// store.dispatch({type: "LOGIN"});

// Disabled for the purposes of this demo
// seed_data.forEach(function(val, i) {
//   store.dispatch({type: "CREATE_SEED", payload: val})
// })


export { store };