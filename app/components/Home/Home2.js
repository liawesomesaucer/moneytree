import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Nav from '../Nav';

import TransactionList from '../Transactions/TransactionList';

import { deleteSeed } from '../../actions/seedActions';

const red = "#E3655B";
const yellow = "#FFDE59";
const green = "#69CC8E";

const baby = "Small_Tree.png";
const medium = "Medium_Tree.png";
const large = "Tree.png";

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
  handleDelete(name, goal) {
    this.props.dispatch(deleteSeed(name, goal));
  }
  diffMoney(startTime, endTime) {
    let diff = 0;
    this.props.transactions.forEach(function(value) {
      let valDate = new Date(value.date);
      // console.log(value);
      // console.log(value)
      // console.log(valDate);
      // console.log(startTime);
      // console.log(endTime);
      if (valDate >= startTime && valDate <= endTime) {
        // console.log("yes")
        diff = diff - value.amount;
      }
    });
    // console.log("Diff returned is: " + diff.toString())
    return diff;
  }
  render() {
    let seedPercentages = [];
    let seedPercentagesSum = 0;
    let tree = []

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
      let color;

      if (percentCompleted <= 20) color = red;
      else if (percentCompleted <= 80) color = yellow;
      else color = green;

      seedPercentages.push(percentCompleted);
      seedPercentagesSum = seedPercentagesSum + parseInt(percentCompleted);

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
              onClick={() => this.handleDelete(val.name, val.goal)}
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
              style={{
                width: (percentCompleted > 0) ? Math.max(percentCompleted, 8) + "%": 0,
                backgroundColor: color
              }}
            >
            </div>
          </div>
        </li>
      )
    })

    let avgPercent = seedPercentagesSum / seedPercentages.length;
    let treeSize = baby;
    console.log(avgPercent);
    if (avgPercent < 33) treeSize = baby;
    else if (avgPercent < 66) treeSize = medium;
    else treeSize = large;

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
          <img src={"static/images/" + treeSize} />
        </div>
      )
    }

    return (
      <div className="">
        <Nav pageName="Plant"/>
        <a className="btn-add" onClick={() => browserHistory.push('/plant')}>
          +
          <div className="btn-add-label">Plant</div>
        </a>
        {tree}
        {/*<div className="center-text">
          <a 
            className="btn btn-default"
            onClick={() => browserHistory.push("/plant")}
          >
            Plant a Seed
          </a>
        </div>
      */}
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