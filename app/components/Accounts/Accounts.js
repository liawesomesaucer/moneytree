import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function Accounts () {
  return (
    <div>
      <Nav pageName="Accounts"/>
      <a onClick={() => browserHistory.push('/accounts/add')}>Add</a>
    </div>
  )
}