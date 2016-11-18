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
      let color = (val.amount > 0) ? "#E3655B": "#69CC8E";
      let cost = (val.amount > 0) ? "- $" + val.amount.toString() : val.amount.toString().replace("-", "$");

      transactions.push(
        <li className="list--elem list--transaction" key={index}>
          <span 
            className="list--row-right list--price"
            style={{
              color: color
            }}
          >{cost}</span>
          <span className="list--row-left list--title list--account-name">{val.name}</span><br/>
          <span className="list--row-left list--title list--date">{val.date}</span>
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