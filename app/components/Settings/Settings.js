import React from 'react';
import FontAwesome from 'react-fontawesome';

import Nav from '../Nav';

export default function Settings () {
  return (
    <div className="wrapper">
      <Nav pageName="Settings"/>
      <div className="settings--wrapper">
        <div className="settings--logo">
        </div>
        <form className="form settings--form">
          <div className="form--section">
            <div className="form--section-header">
              Security
            </div>
            <input 
              type="text"
              name="email"
              placeholder="Email"
              className="field field--std"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="field field--std"
            />
        </div>
        <div className="form--section">
          <button className="btn btn-white btn--fullwidth" >
            Sign Out
            <span className="list--row-right">
              <FontAwesome name="chevron-right" />
            </span>
          </button>
        </div>

        <div className="form--section">
          <div className="form--section-header">
            Goals
          </div>
          <input 
            type="text"
            name="goal"
            placeholder="Goal Amount"
            className="field field--std"
          />
          <select
            name="time-period"
            className="field field-std field--secondary"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
          <input 
            type="text"
            name="income"
            placeholder="Monthly Income"
            className="field field--std"
          />
        </div>

        <div className="form--section">
          <input
            type="submit"
            name="submit"
            value="Update"
            className="field field--submit field--primary"
          />
        </div>
        </form>
      </div>
    </div>
  )
}