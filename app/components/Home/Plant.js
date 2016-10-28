import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function Plant () {
  return (
    <div className="">
      <Nav pageName="Plant a Seed" />
      <a onClick={() => browserHistory.push('/home')}>Back</a>
    </div>
  )
}