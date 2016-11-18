import axios from 'axios';

const transaction_data = []
const transaction_route = '/api/transactions';

const transactionsReducer = (state=transaction_data, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      let newTrans = action.payload;
      if (!newTrans.posted) {
        newTrans.posted = true;
        axios.post(transaction_route + '/add', newTrans)
        .then(function(res) {
          console.log("Updated seed backend");
        })
        .catch(function(err) {
          console.log(err);
        });
      }
      return [
        ...state,
        newTrans
      ];
    }
    case "ADD_TRANSACTIONS": {
      console.log("multiple tranasaction adds called");
      let newTrans = action.payload;
      let filtered = [];

      newTrans.forEach(function(elem, i) {
        if (!elem.posted) {
          elem.posted = true;
          filtered.unshift(elem);
        }
      });

      axios.post(transaction_route + '/addList', filtered)
        .then(function(res) {
          console.log("Updated seed backend");
        })
        .catch(function(err) {
          console.log(err);
        });
      
      return [
        ...state
      ].concat(newTrans);
    }
  }
  return state;
}

export { transactionsReducer };