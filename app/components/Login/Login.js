import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

import Nav from '../Nav';

@connect((store) => {
  return {
  };
})
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.dispatch(loginUser());
    browserHistory.push('/');
  }
  render () {
    return (
      <div className="wrapper--padded">
        <Nav pageName="Log In"/>
        <div className="login--wrapper">
          <div className="login--logo tree-wrapper">
            <img src={'/static/images/Tree.png'} />
            <h1>MoneyTree</h1>
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
                onClick={() => this.handleLogin()}
              >
                Login
              </button>
            </div>
            <div className="form--group form--separated">
              <button
                type="button"
                className="field field--full-width field--secondary"
                onClick={() => this.handleLogin()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}