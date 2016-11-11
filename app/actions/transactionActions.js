export function addTransaction (name, date, price) {
  return {
    type: "ADD_TRANSACTION",
    payload: {
      name: name,
      date: date,
      price: price
    }
  }
}