import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Nav (props) {
  return (
    <div className="top-nav">
      <p>{props.pageName}</p>
    </div>
  )
}