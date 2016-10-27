import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory, DefaultRoute, IndexLink } from 'react-router'

import Container from './components/Container';
import NotFound from './components/Notfound';
import Accounts from './components/Accounts/Accounts';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import Transactions from './components/Transactions/Transactions';

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='home' component={Home} />
          <Route path='accounts' component={Accounts} />
          <Route path='login' component={Login} />
          <Route path='settings' component={Settings} />
          <Route path='transactions' component={Transactions} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
