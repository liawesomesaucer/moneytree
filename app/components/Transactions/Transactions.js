import React from 'react';
import rd3 from 'rd3';


import Nav from '../Nav';
import TransactionList from './TransactionList';


export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let PieChart = rd3.PieChart;
    let pieData = [{label: "Food", value: 20.0}, {label: "Housing", value: 55.0}, {label: "Tuition", value: 25.0 }];

    return (
      <div className="">
        <Nav pageName="Transactions"/>
        <div className="graph-wrapper">
          <PieChart
            data={pieData}
            width={300}
            height={300} 
            radius={110}
            innerRadius={20}
            sectorBorderColor="white"
          />
        </div>
        <TransactionList />
      </div>
    )
  }
}