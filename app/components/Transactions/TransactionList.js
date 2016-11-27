import React from 'react';
import { connect } from 'react-redux';
import { deleteTransaction } from '../../actions/transactionActions';

import FontAwesome from 'react-fontawesome';

@connect((store) => {
  return {
    transactions: store.transactions
  };
})
export default class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }
  deleteTransaction(name, date, amount) {
    console.log("delteTransaction called");
    this.props.dispatch(
      deleteTransaction(name, date, amount)
    );
  }
  render () {
    let transactions = [];

    this.props.transactions.forEach((val, index) => {
      let color = (val.amount > 0) ? "#E3655B": "#69CC8E";
      let cost = (val.amount > 0) ? "- $" + val.amount.toString() : val.amount.toString().replace("-", "$");

      transactions.push(
        <li className="list--elem list--transaction" key={index}>
          <span className="list--row-right list--price">
            <span style={{
                color: color
              }}
            >
              {cost}
            </span>
            <span 
              className="list--delete"
              onClick={() => this.deleteTransaction(val.name, val.date, val.amount)}
            >
              <FontAwesome name="times-circle-o" />
            </span>
          </span>
          <span className="list--row-left list--title list--account-name">{val.name}</span><br/>
          <span className="list--row-left list--title list--date">{val.date.slice(0, 10)}</span>
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