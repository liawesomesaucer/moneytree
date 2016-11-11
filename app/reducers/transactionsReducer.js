import { transaction_data } from '../components/Transactions/TransactionData';

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

export { transactionsReducer };