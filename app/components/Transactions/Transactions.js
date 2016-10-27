import React from 'react';

import Nav from '../Nav';
import TransactionList from './TransactionList';

export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="">
        <Nav pageName="Transactions"/>
        <div className="graph-wrapper">
        </div>
        <TransactionList />
      </div>
    )
  }
}