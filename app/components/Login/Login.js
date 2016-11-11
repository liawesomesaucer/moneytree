import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

import Nav from '../Nav';

var accData = {
  "accounts": [
    {
      "email": "test1@mail.com",
      "password": "password1"
    },
    {
      "email": "test2@mail.com",
      "password": "password2"
    }
  ]
}

@connect((store) => {
  return {
  };
})
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin.bind(this);
    this.state = {
      email: "",
      pass: ""
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handlePassChange(e) {
    this.setState({pass: e.target.value})
  }
  checkCredentials() {
    for (var i = 0; i < accData.accounts.length; i++) {
      var acc = accData.accounts[i];
      var attEmail = acc.email;
      var attPass = acc.password;

      if (attEmail == this.state.email && attPass == this.state.pass) {
        return true;
      }
    }
    return false;
  }
  handleLogin() {
    if (this.checkCredentials()) {
      this.props.dispatch(loginUser());
      browserHistory.push('/');
    } else {
      this.state.pass.setState("");
    }
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
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="form--group form--separated">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="field field--std field--full-width"
                onChange={this.handlePassChange}
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