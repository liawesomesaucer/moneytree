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
            value="Login"
            className="field field--submit field--primary"
          />
          <input
            type="submit"
            name="submit"
            value="Register"
            className="field field--submit field--secondary"
          />
        </form>
      </div>
    </div>
  )
}