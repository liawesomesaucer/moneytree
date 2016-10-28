import React from 'react';

import Nav from '../Nav';
import AccountsList from './AccountsList';

export default function Accounts () {
  return (
    <div>
      <Nav pageName="Accounts"/>
      <AccountsList />
    </div>
  )
}