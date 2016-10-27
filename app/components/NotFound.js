import React from 'react';

import Nav from './Nav';

export default function NotFound () {
  return (
    <div className="container-fluid">
      <Nav pageName="Page Not Found" />
      <h1>Page not found</h1>
    </div>
  )
}