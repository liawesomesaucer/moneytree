import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

import { createSeed } from '../../actions/seedActions';

import Nav from '../Nav';

@connect((store) => {
  return {};
})
export default class Plant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 0,
      time: "Week"
    }
    this.handleUpdateGoal = this.handleUpdateGoal.bind(this);
    this.handleUpdateTime = this.handleUpdateTime.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUpdateName(e) {
    this.setState({name: e.target.value});
  }
  handleUpdateGoal(e) {
    this.setState({goal: e.target.value});
  }
  handleUpdateTime(e) {
    this.setState({time: e.target.value});
  }
  handleSubmit(e) {
    if (!this.state.name || !this.state.goal) {
      document.getElementById("errormsg").innerHTML = "All fields required";
      return;
    }
    this.props.dispatch(createSeed(this.state.name, this.state.goal, this.state.time));
    browserHistory.push('/');
  }
  render () {
    return (
      <div className="wrapper">
        <Nav pageName="Plant a Seed" />
        <a className="btn-back" onClick={() => browserHistory.goBack()}>Back</a>
        <div className="plant wrapper-pad-top form--separated">
          <div className="header">
            <h1><FontAwesome name="leaf" /></h1>
          </div>
          <div className="form--section-header">
            Seed Traits
          </div>
          <div className="form--section-header" id="errormsg"></div>
          <div className="form--group">
            <label htmlFor="goal">Name</label>
            <input 
              type="text"
              name="name"
              id="name"
              className="field field--std"
              onChange={this.handleUpdateName}
            />
          </div>
          <div className="form--group form--group-money">
            <label htmlFor="goal">Goal</label>
            <input 
              type="text"
              name="goal"
              id="goal"
              className="field field--std"
              onChange={this.handleUpdateGoal}
            />
          </div>
          <div className="form--group">
            <label htmlFor="time-period">Time Period</label>
            <select
              id="time-period"
              name="time-period"
              className="field field-std"
              onChange={this.handleUpdateTime}
            >
              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
            <span className="row-right-overlay">
              <FontAwesome name="chevron-down" />
            </span>
          </div>
        </div>
        <div className="form--group form--separated">
          <button
            type="button"
            className="field field--full-width field--primary"
            onClick={() => this.handleSubmit()}
          >
            Plant Seed
          </button>
        </div>
      </div>
    )
  }
}