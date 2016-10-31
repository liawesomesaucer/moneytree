import React from 'react';

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
            <input
              type="submit"
              name="submit"
              value="Login"
              className="field field--full-width field--primary"
            />
          </div>
          <div className="form--group form--separated">
            <input
              type="submit"
              name="submit"
              value="Register"
              className="field field--full-width field--secondary"
            />
          </div>
        </form>
      </div>
    </div>
  )
}