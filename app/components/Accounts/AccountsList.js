import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { addAccount } from '../../actions/accountsActions';
import { addTransactions } from '../../actions/transactionActions';

@connect((store) => {
  return {
    accounts: store.accounts,
    transactions: store.transactions
  };
})
export default class AccountsList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var reactElem = this;
    // Attach the plaid api
    var sandboxHandler = Plaid.create({
      clientName: 'MoneyTree',
      env: 'tartan',
      product: 'auth',
      key: 'test_key',
      onSuccess: function(token, metadata) {
        console.log('account_id is', metadata.account_id);
        $.get(
          "/api/accounts?public_token=" + token,
          function(data) {
            console.log("wow");
            console.log(data);
            reactElem.props.dispatch(addTransactions(data.transactions));
            reactElem.props.dispatch(addAccount(data.accounts));
            browserHistory.push('/accounts');
          }
        );
      },
    });
    document.getElementById('plaid-link').onclick = function() {
      sandboxHandler.open();
    };
  }
  render () {
    let accounts = [];
    let accounts_data = [];
    for(var i = 0; i < this.props.accounts.length; i++) {
        accounts_data = accounts_data.concat(this.props.accounts[i]);
    }

    console.log(this.props.accounts);

    if (accounts_data.length === 0) {
      accounts.push(
        <li className="list--elem list--account-elem" key={1}>
          <span className="list--account-name">No Accounts Yet!</span><br/>
          <span className="list--account-number">Connect an account to begin</span>
        </li>
      )
    }
    else {
      accounts_data.forEach((val, index) => {
        accounts.push(
          <li className="list--elem list--account-elem" key={index}>
            <span className="list--account-name">{val.meta.name}</span><br/>
            <span className="list--row-right">$ {val.meta.number}</span>
            <span className="list--account-number">{val.subtype}</span>
          </li>
        );
      });
    }
    return (
      <div className="list-wrapper">
        <ul className="reset-list list">
          <li className="list--elem list--header">
            <span>Accounts</span>
          </li>
          {accounts}
          <button 
            id="plaid-link"
            className="btn-primary plaid-link-button" 
            >
            Link a bank
          </button>
          <span className="row-right-overlay btn-primary">
            <span className="fa fa-chevron-right">
            </span>
          </span>  
        </ul>
      </div>
    )
  }
}