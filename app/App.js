import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory, DefaultRoute, IndexLink } from 'react-router'

import Container from './components/Container';
import NotFound from './components/NotFound';
import Accounts from './components/Accounts/Accounts';
import AddAccount from './components/Accounts/AddAccount';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import Transactions from './components/Transactions/Transactions';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Container}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />
      <Route path='accounts' component={Accounts} />
      <Route path='accounts/add' component={AddAccount} />
      <Route path='login' component={Login} />
      <Route path='settings' component={Settings} />
      <Route path='transactions' component={Transactions} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

class App extends Component {
  render () {
    return routes
  }
}

export default App;
