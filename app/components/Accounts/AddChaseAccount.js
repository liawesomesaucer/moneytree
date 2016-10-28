import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function AddChaseAccount () {
  return (
    <div>
      <Nav pageName="Add Chase Account"/>
      <a onClick={() => browserHistory.push("accounts/add")}>Back</a>
    </div>
  )
}