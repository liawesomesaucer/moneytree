import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function AddAccount () {
  return (
    <div>
      <Nav pageName="Add Account"/>
      <a onClick={() => browserHistory.push('/accounts')}>Back</a>
      <a onClick={() => browserHistory.push('/accounts/add/chase')}>Chase</a>
      <a onClick={() => browserHistory.push('/accounts/add/wells')}>Wells Fargo</a>
    </div>
  )
}