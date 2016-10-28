import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

import TransactionList from '../Transactions/TransactionList';

export default function Home () {
  return (
    <div className="">
      <Nav pageName="Home"/>
      <div className="tree-wrapper">
        <h4 className="plant-message">
          You have not planted any seeds yet
        </h4>
        <a 
          className="btn btn-default"
          onClick={() => browserHistory.push("/plant")}
        >
          Plant a Seed
        </a>
      </div>
      <TransactionList />
    </div>
  )
}