import { createStore, combineReducers } from 'redux';
import transaction_data from '../components/Transactions/TransactionData';

// TODO: move to separate file
const transactionsReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      state.transactions = [
        ...state.transactions,
        action.payload
      ]
      break;
    }
  }
  return state;
}

// TODO: move to separate file
const settingsReducer = (state={}, action) => {
  return state;
}

const reducers = combineReducers({
  settings: settingsReducer,
  transactions: transactionsReducer,
})

export const store = createStore(reducers);

