import React from 'react';

import BottomNav from './BottomNav';
import Nav from './Nav';

export default function Container (props) {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        {props.children}
      </div>
      <BottomNav />
    </div>
  )
}