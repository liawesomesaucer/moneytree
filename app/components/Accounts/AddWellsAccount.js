import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function AddWellsAccount () {
  return (
    <div>
      <Nav pageName="Add Wells Account"/>
      <a onClick={() => browserHistory.push("/accounts/add")}>Back</a>
    </div>
  )
}