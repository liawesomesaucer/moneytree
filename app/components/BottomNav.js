import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function BottomNav (props) {
  return (
    <div className="mobile-nav reset-list">
      <ul>
        <li onClick={() => browserHistory.push('/')}>
          <FontAwesome name="home" />
          <p className="no-margin">Home</p>
        </li>
        {/*
        <li onClick={() => browserHistory.push('/accounts')}>
          <FontAwesome name="address-book" />
          <p className="no-margin">Accounts</p>
        </li>
      */}
        <li onClick={() => browserHistory.push('/add')}>
          <FontAwesome name="plus-square-o" />
          <p className="no-margin">Transaction</p>
        </li>
        <li onClick={() => browserHistory.push('/transactions')}>
          <FontAwesome name="credit-card" />
          <p className="no-margin">History</p>
        </li>
        <li onClick={() => browserHistory.push('/settings')}>
          <FontAwesome name="cog" />
          <p className="no-margin">Settings</p>
        </li>
      </ul>
    </div>
  )
}