import React from 'react';
import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import Nav from '../Nav';
import TransactionList from './TransactionList';

import { addTransaction } from '../../actions/transactionActions';

@connect((store) => {
  return {};
})
export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.todaysDate = this.todaysDate.bind(this);
    this.state = {
      name: "",
      price: 0,
      date: this.todaysDate()
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  todaysDate() {
    return (new Date()).toISOString().slice(0, 10);
  }
  addTransaction() {
    this.props.dispatch(
      addTransaction(this.state.name, this.state.date, this.state.price)
    );
    browserHistory.push('/transactions');
  }
  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handleDateChange(e) {
    this.setState({date: e.target.value})
  }
  handlePriceChange(e) {
    if (parseInt(e.target.value))
      this.setState({price: parseInt(e.target.value)})
  }
  render () {
    return (
      <div className="wrapper">
        <Nav pageName="New Transaction"/>
        
        <div className="wrapper-pad-top">
          <form className="form">
            <div className="form--section">
              <div className="form--section-header">
                Basic Info
              </div>
              <div className="form--group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text"
                  name="name"
                  id="name"
                  className="field field--std"
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="form--group form--group-money">
                <label htmlFor="price">Price</label>
                <input 
                  type="text"
                  name="price"
                  id="price"
                  className="field field--std field--money"
                  onChange={this.handlePriceChange}
                />
              </div>
              <div className="form--group form--separated">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="field field--std"
                  onChange={this.handleDateChange}
                  value={this.state.date}
                />
              </div>
              <div className="form--group form--separated">
                <button
                  className="field field--full-width field--primary"
                  type="button"
                  onClick={this.addTransaction.bind(this)}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
