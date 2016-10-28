import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

import { accounts_data } from './AccountsData';

export default class AccountsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let accounts = [];

    accounts_data.forEach((val, index) => {
      accounts.push(
        <li className="list--elem list--account-elem" key={index}>
          <span className="list--account-name">{val.name}</span><br/>
          <span className="list--account-number">{val.numbers.join("-")}</span>
        </li>
      );
    });
    return (
      <div className="list-wrapper">
        <ul className="reset-list list">
          <li className="list--elem list--header">
            <span>Accounts</span>
          </li>
          {accounts}
          <a onClick={() => {browserHistory.push('accounts/add')}}>
            <li className="list--elem list--primary">
              <span>Add Account</span>
              <span className="list--row-right list--account-add">
                <FontAwesome name="plus" />
              </span>
            </li>      
          </a>
        </ul>
      </div>
    )
  }
}