import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function Login () {
  return (
    <div className="wrapper--padded">
      <Nav pageName="Log In"/>
      <div className="login--wrapper">
        <div className="login--logo">
        </div>

        <form className="form login--form">
          <div className="form--group form--separated">
            <input 
              type="text"
              name="email"
              placeholder="Email"
              className="field field--std field--full-width"
            />
          </div>
          <div className="form--group form--separated">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="field field--std field--full-width"
            />
          </div>
          <div className="form--group form--separated">
            <button
              type="button"
              className="field field--full-width field--primary"
              onClick={() => browserHistory.push('/')}
            >
              Login
            </button>
          </div>
          <div className="form--group form--separated">
            <button
              type="button"
              className="field field--full-width field--secondary"
              onClick={() => browserHistory.push('/')}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}