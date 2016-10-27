import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Nav () {
  return (
    <div className="mobile-nav">
      <ul>
        <li>
          <FontAwesome name="home" />
        </li>
        <li>
          <FontAwesome name="address-book" />
        </li>
        <li>
          <FontAwesome name="credit-card" />
        </li>
        <li>
          <FontAwesome name="cog" />
        </li>
      </ul>
    </div>
  )
}