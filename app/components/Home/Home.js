import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import Nav from '../Nav';

import TransactionList from '../Transactions/TransactionList';

@connect((store) => {
  return {
    seeds: store.seeds,
    transactions: store.transactions
  };
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.diffMoney = this.diffMoney.bind(this);
  }
  diffMoney(startDate, endDate) {
    let diff = 0;
    this.props.transactions.forEach(function(value) {
      let valDate = new Date(value.date);
      if (valDate >= startDate && valDate <= endDate) {
        diff = diff - value.amount;
      }
    });
    return diff;
  }
  render() {
    let tree = []
    if (this.props.seeds.length === 0) {
      tree = (
        <div className="tree-wrapper">
          <h4 className="plant-message">
            You have not planted any seeds yet
          </h4>
          <a 
            className="btn btn-default"
            onClick={() => browserHistory.push("/plant")}
          >
            Plant a Seed
          </a>
        </div>
      )
    } else {
      tree = (
        <div className="tree-wrapper">  
          <img src={`static/images/Tree.png`} />
        </div>
      )
    }
    let seeds = []
    this.props.seeds.forEach((val, i) => {
      seeds.push(
        <li
          className="list--elem list--elem-seed"
          key={i}

        >
          <span 
            className="seed--status-bar"
            style={{width: this.diffMoney(val.starDate, val.endDate).toString() + "%"}}
          ></span>
          {val.name}
        </li>
      )
    })

    return (
      <div className="">
        <Nav pageName="Home"/>
        {tree}
        <ul className="reset-list list seed-list">
          {seeds}
        </ul>
        <TransactionList />
      </div>
    )
  }
}