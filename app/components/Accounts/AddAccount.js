import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function AddAccount () {
  return (
    <div>
      <Nav pageName="Add Account"/>
      <div className="content-wrapper">
        <a onClick={() => browserHistory.push('/accounts')}>Back</a>
        <ul className="tile-list">
          <a onClick={() => browserHistory.push('/accounts/add/chase')}>
            <li>
            </li>
          </a>
          <a onClick={() => browserHistory.push('/accounts/add/wells')}>
            <li>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}