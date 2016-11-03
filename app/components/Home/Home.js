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
  diffMoney(startTime, endTime) {
    let diff = 0;
    this.props.transactions.forEach(function(value) {
      let valDate = new Date(value.date);
      // console.log(value);
      // console.log(valDate);
      // console.log(startTime);
      // console.log(endTime);
      if (valDate >= startTime && valDate <= endTime) {
        console.log("yes")
        diff = diff - value.amount;
      }
    });
    console.log("Diff returned is: " + diff.toString())
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
      console.log(val);
      seeds.push(
        <li
          className="list--elem list--elem-seed"
          key={i}
        >
          <span 
            className="seed--status-bar"
            style={{width: this.diffMoney(val.startTime, val.endTime).toString() + "%"}}
          ></span>
          <span className="list--account-name">{val.name}</span><br/>
          <span className="list--account-number">Save {val.goal} in a {val.time}</span>
        </li>
      )
    })

    return (
      <div className="">
        <Nav pageName="Home"/>
        {tree}
        <div className="center-text">
          <a 
            className="btn btn-default"
            onClick={() => browserHistory.push("/plant")}
          >
            Plant a Seed
          </a>
        </div>
        <div className="form--section-header">
          Current Seeds
        </div>
        <ul className="reset-list list seed-list">
          {seeds}
        </ul>
        <TransactionList />
      </div>
    )
  }
}