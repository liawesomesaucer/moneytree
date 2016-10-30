import React from 'react';

import Nav from '../Nav';

export default function Settings () {
  return (
    <div className="wrapper--padded">
      <Nav pageName="Settings"/>
      <div className="settings--wrapper">
        <div className="settings--logo">
        </div>

        <form className="form settings--form">
          <input 
            type="text"
            name="email"
            placeholder="Email"
            className="field field--std"
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="field field--std"
          />
          <input
            type="submit"
            name="submit"
            value="Update"
            className="field field--submit field--primary"
          />
          <input
            type="submit"
            name="submit"
            value="Sign Out"
            className="field field--submit field--secondary"
          />
        </form>
      </div>
    </div>
  )
}