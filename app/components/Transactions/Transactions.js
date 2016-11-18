import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import rd3 from 'rd3';

import { browserHistory } from 'react-router';

import Nav from '../Nav';
import TransactionList from './TransactionList';

import { Chart } from 'react-d3-core';
import { LineChart } from 'react-d3-basic';

let ctr = 0;
const x = function(d) {
  return ctr++;
}

@connect((store) => {
  return {
    transactions: store.transactions
  };
})
export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this.props.transactions)
    return (
      <div className="">
        <Nav pageName="Transactions"/>
        <div className="graph-wrapper">
          {/*<LineChart
            data={this.props.transactions}
            width={400}
            height={300} 
            title={"Summary"}
            x={x}
            chartSeries={[
              {
                field: "amount",
                name: "Transaction Amount",
                color: "#69CC8E"
              }
            ]}
          />*/}<br/><br/>
        </div>
        <div className="center-text">
          <a 
            className="btn btn-default"
            onClick={() => browserHistory.push("/add")}
          >
            Add a Transaction
          </a>
        </div>
        <TransactionList />
      </div>
    )
  }
}