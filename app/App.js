import React, { Component } from 'react'
import { Provider, connect } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, DefaultRoute, IndexLink } from 'react-router'

import { store } from './store/initialization';

import Container from './components/Container';
import NotFound from './components/NotFound';
import Accounts from './components/Accounts/Accounts';
import AddAccount from './components/Accounts/AddAccount';
import HomeWrapper from './components/Home/HomeWrapper';
import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import Transactions from './components/Transactions/Transactions';
import Plant from './components/Home/Plant';
import AddTransaction from './components/Transactions/AddTransaction';
import { changePath } from './actions/pathnameActions';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-87383176-1');

const routes = (
  <Route path='/' component={Container}>
    <IndexRoute component={HomeWrapper} />
    <Route path='home' component={Home} />
    <Route path='home2' component={Home2} />
    <Route path='accounts' component={Accounts} />
    <Route path='accounts/add' component={AddAccount} />
    <Route path='add' component={AddTransaction} />
    <Route path='login' component={Login} />
    <Route path='plant' component={Plant} />
    <Route path='settings' component={Settings} />
    <Route path='transactions' component={Transactions} />
    <Route path='*' component={NotFound} />
  </Route>
);

@connect((store) => {
  return {
    pathname: store.pathname
  }
})
class App extends Component {

  handlePageView () {
    if (window !== undefined) {
      console.log("Sending pageview to" + window.location.pathname)
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
      window.scrollTo(0, 0);
      this.props.dispatch(changePath(window.location.pathname));
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} onUpdate={() => this.handlePageView()}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

export default App;
