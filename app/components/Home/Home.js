import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Nav from '../Nav';

import TransactionList from '../Transactions/TransactionList';

import { deleteSeed } from '../../actions/seedActions';

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
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(name) {
    this.props.dispatch(deleteSeed(name));
  }
  diffMoney(startTime, endTime) {
    let diff = 0;
    this.props.transactions.forEach(function(value) {
      let valDate = new Date(value.date);
      // console.log(value);
      console.log(value)
      console.log(valDate);
      console.log(startTime);
      console.log(endTime);
      if (valDate >= startTime && valDate <= endTime) {
        console.log("yes")
        diff = diff - value.amount;
      }
    });
    // console.log("Diff returned is: " + diff.toString())
    return diff;
  }
  render() {
    let tree = []
    if (this.props.seeds.length === 0) {
      tree = (
        <div className="tree-wrapper">
          <h4 className="plant-message">
            Get started by setting a budget
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
    if (this.props.seeds.length === 0) {
      seeds.push(
        <li
          className="list--elem"
          key={1}
        >
          <div className="list--elem-seed-info">
            <span className="list--row-left">
              <div className="list--account-name">No seed goals set yet.</div>
              <div className="list--account-number">Start by planting a seed!</div>
            </span>
            <span className="list--row-right list--account-right"><br/>
             {/* <span className="small-text">Complete</span>*/}
            </span>
          </div>
        </li>
      )
    }
    this.props.seeds.forEach((val, i) => {
      if (!val) return;
      let diff = this.diffMoney(val.startTime, val.endTime);
      let percentCompleted = Math.max(0, Math.min((diff / val.goal * 100), 100)).toString().split(".")[0];
      // console.log("wow")
      // console.log(percentCompleted);
      seeds.push(
        <li
          className="list--elem list--elem-seed"
          key={i}
        >
          <div className="list--elem-seed-info">
            
            <span className="list--row-left">
              <div className="list--account-name">{val.name}</div>
              <div className="list--account-number">Save ${val.goal} in a {val.time}</div>
            </span>
            <span 
              className="list--row-right list--account-right"
              onClick={() => this.handleDelete(val.name)}
            >
              <FontAwesome name="times"/>
            </span>
          </div>

          <div className="list--elem-seed-dropdown">
            <span className="list--row-left">
              <div className="list--account-number">Current progress: ${diff.toString().split(".")[0]}</div>
              <div className="list--account-number"></div>
            </span>
            <span className="list--row-right list--account-right"><br/></span>
          </div>
          <div className="seed--status-bar-wrapper">
            <div className="z10">{percentCompleted}% Complete</div>
            <div 
              className="seed--status-bar"
              style={{width: percentCompleted + "%"}}
            >
            </div>
          </div>
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
        {/*<TransactionList />*/}
      </div>
    )
  }
}