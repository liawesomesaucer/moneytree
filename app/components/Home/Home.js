import React from 'react';

import Nav from '../Nav';

import TransactionList from '../Transactions/TransactionList';

export default function Home () {
  return (
    <div className="">
      <Nav pageName="Home"/>
      <TransactionList />
    </div>
  )
}