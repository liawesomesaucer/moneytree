import React from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav';
import TransactionList from './TransactionList';

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="">
        <Nav pageName="New Transaction"/>
        
      </div>
    )
  }
}