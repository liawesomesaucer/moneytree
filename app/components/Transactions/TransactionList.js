import React from 'react';

import { transaction_data } from './TransactionData';

export default class TransactionList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let transactions = [];

    transaction_data.forEach((val, index) => {
      let cost = (val.price > 0) ? "$ " + val.price.toString() : val.price.toString().replace("-", "- $ ");

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
          <li className="list--elem list--header">
            <span>Recent Transactions</span>
          </li>
          {transactions}
        </ul>
      </div>
    )
  }
}