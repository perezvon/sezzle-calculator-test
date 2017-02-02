import React, { Component } from 'react';
import Calculator from './Calculator.jsx';
import CalcResult from './CalcResult.jsx';
import UserInput from './UserInput.jsx';
import { Calculations } from '../api/calculations/calculations.js'; 

export default class App extends Component {
  getCalculations() {
    return Calculations.find({}, {limit: 10, sort: {date: -1}})
  }
 
  renderCalculations() {
    return this.getCalculations().map((calc) => (
      <CalcResult key={calc._id} data={calc.data} user={calc.user}/>
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Calculator</h1>
        </header>
        <ul>
          {this.renderCalculations()}
        </ul> 
        <Calculator />
            <UserInput />
      </div>
    );
  }
}