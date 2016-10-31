import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, DefaultRoute, IndexLink } from 'react-router'

import { store } from './store/initialization';

import Container from './components/Container';
import NotFound from './components/NotFound';
import Accounts from './components/Accounts/Accounts';
import AddAccount from './components/Accounts/AddAccount';
import AddChaseAccount from './components/Accounts/AddChaseAccount';
import AddWellsAccount from './components/Accounts/AddWellsAccount';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import Transactions from './components/Transactions/Transactions';
import Plant from './components/Home/Plant';
import AddTransaction from './components/Transactions/AddTransaction';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Container}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />
      <Route path='accounts' component={Accounts} />
      <Route path='accounts/add' component={AddAccount} />
      <Route path='accounts/add/chase' component={AddChaseAccount} />
      <Route path='accounts/add/wells' component={AddWellsAccount} />
      <Route path='add' component={AddTransaction} />
      <Route path='login' component={Login} />
      <Route path='plant' component={Plant} />
      <Route path='settings' component={Settings} />
      <Route path='transactions' component={Transactions} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)


// store.subscribe(() => {
//   console.log("store changed", store.getState());
// })

// store.dispatch({type: "ADD_TRANSACTION", payload: {name: "New Transaction", date: "Date", price: -124}});
console.log(store);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    )
  }
}

export default App;
