import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    transactions: store.transactions
  };
})
export default class TransactionList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let transactions = [];

    this.props.transactions.forEach((val, index) => {
      let cost = (val.amount > 0) ? "$ " + val.amount.toString() : val.amount.toString().replace("-", "- $ ");

      transactions.push(
        <li className="list--elem" key={index}>
          <span className="list--row-left list--title">{val.name}</span>
          <span className="list--row-right list--price">{cost}</span>
        </li>
      );
    });
    return (
      <div className="list-wrapper">
        <ul className="reset-list list">
          <li className="form--section-header">
            Recent Transactions
          </li>
          {transactions}
        </ul>
      </div>
    )
  }
}