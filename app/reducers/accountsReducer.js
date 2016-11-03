const accounts_data = [];

const accountsReducer = (state=accounts_data, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT": {
      return [
        ...state,
        action.payload
      ];
    }
  }
  return state;
}

export { accountsReducer };