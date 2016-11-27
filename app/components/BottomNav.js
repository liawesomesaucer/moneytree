import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

@connect((store) => {
  return {
    auth: store.auth,
    pathname: store.pathname
  };
})
export default class BottomNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.auth.logged_in) {
      let pathname = this.props.pathname.route;
      return (
        <div className="mobile-nav reset-list">
          <ul>
            <li 
              onClick={() => browserHistory.push('/')}
              className = {(pathname === '') ? 'active' : ''}
            >
              <FontAwesome name="home" />
              <p className="no-margin">Home</p>
            </li>
            <li 
              onClick={() => browserHistory.push('/accounts')}
              className = {(pathname === 'accounts') ? 'active' : ''}
            >
              <FontAwesome name="address-book" />
              <p className="no-margin">Accounts</p>
            </li>
            {/*<li onClick={() => browserHistory.push('/add')}>
              <FontAwesome name="plus-square-o" />
              <p className="no-margin">Transaction</p>
            </li>*/}
            <li 
              onClick={() => browserHistory.push('/transactions')}
              className = {(pathname === 'transactions') ? 'active' : ''}
            >
              <FontAwesome name="credit-card" />
              <p className="no-margin">Transactions</p>
            </li>
            <li 
              onClick={() => browserHistory.push('/settings')}
              className = {(pathname === 'settings') ? 'active' : ''}
            >
              <FontAwesome name="cog" />
              <p className="no-margin">Settings</p>
            </li>
          </ul>
        </div>
      )
    }
    return null;
  }
}