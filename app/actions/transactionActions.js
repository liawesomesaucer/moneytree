export function addTransaction (name, date, amount) {
  return {
    type: "ADD_TRANSACTION",
    payload: {
      name: name,
      date: date,
      amount: amount
    }
  }
}
export function addTransactions (transactionList) {
  return {
    type: "ADD_TRANSACTIONS",
    payload: transactionList
  }
}
export function deleteTransaction (name, date, amount) {
  return {
    type: "DELETE_TRANSACTION",
    payload: {
      name: name,
      date: date,
      amount: amount
    }
  }
}