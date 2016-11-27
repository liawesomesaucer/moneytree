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
      let res = [...state];
      res.unshift(newTrans);
      return res;
    }
    case "ADD_TRANSACTIONS": {
      let newTrans = action.payload;
      let filtered = [];

      newTrans.forEach(function(elem, i) {
        if (!elem.posted) {
          elem.posted = true;
          filtered.unshift(elem);
        }
      });

      axios.post(transaction_route + '/addlist', filtered)
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
    case "DELETE_TRANSACTION": {
      console.log("Deleting transaction");
      let result = [];
      state.forEach(function(val) {
        if (val.name != action.payload.name ||
            val.date != action.payload.date ||
            val.amount != action.payload.amount) {
          result.push(val);
        }
      });

      axios.post(transaction_route + '/delete', action.payload)
        .then(function(res) {
          console.log("Updated seed backend");
        })
        .catch(function(err) {
          console.log(err);
        });

      console.log("newstate");
      return result;
      // return newState;
    }
  }
  return state;
}

export { transactionsReducer };