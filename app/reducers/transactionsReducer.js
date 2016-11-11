const transaction_data = []

const transactionsReducer = (state=transaction_data, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [
        ...state,
        action.payload
      ];
    }
    case "ADD_TRANSACTIONS": {
      return [
        ...state
      ].concat(action.payload);
    }
  }
  return state;
}

export { transactionsReducer };