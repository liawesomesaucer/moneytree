import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

import Nav from '../Nav';

export default function Settings () {
  return (
    <div className="wrapper">
      <Nav pageName="Settings"/>
      <div className="settings wrapper-pad-top">
        <div className="settings--logo">
        </div>
        <form className="form settings--form">
          <div className="form--section">
            <div className="form--section-header">
              Security
            </div>
            <div className="form--group">
              <label htmlFor="email">Email</label>
              <input 
                type="text"
                id="email"
                name="email"
                className="field field--std"
              />
            </div>
            <div className="form--group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="field field--std"
              />
            </div>
        </div>
        <div className="form--section">
          <button 
            type="button"
            className="btn btn-white btn--fullwidth" 
            onClick={() => browserHistory.push('/login')}
          >
            Sign Out
            <span className="row-right-overlay">
              <FontAwesome name="chevron-right" />
            </span>
          </button>
        </div>

        <div className="form--section">
          <div className="form--section-header">
            Goals
          </div>
          <div className="form--group form--group-money">
            <label htmlFor="goal">Goal</label>
            <input 
              type="text"
              name="goal"
              id="goal"
              className="field field--std"
            />
          </div>
          <div className="form--group form--group-money">
            <label htmlFor="income">Income</label>
            <input 
              type="text"
              name="income"
              id="income"
              className="field field--std field--money"
            />
          </div>
          <div className="form--group">
            <label htmlFor="time-period">Time Period</label>
            <select
              id="time-period"
              name="time-period"
              className="field field-std"
            >
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
            </select>
            <span className="row-right-overlay">
              <FontAwesome name="chevron-down" />
            </span>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}