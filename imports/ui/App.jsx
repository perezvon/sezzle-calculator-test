import React, { Component } from 'react';
import Calculator from './Calculator.jsx';
import CalcResult from './CalcResult.jsx';
import UserInput from './UserInput.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Calculations } from '../api/calculations/calculations.js'; 

class App extends Component {
 
  renderCalculations() {
    return this.props.calculations.map((calc) => (
      <CalcResult key={calc._id} calc={calc} />
    ));
  }
 
    componentDidMount () {
        var keys = document.querySelectorAll('.calc-btn');
        var operators = ['+', '-', '/', '*'];
        var decimalFlag = false;
        
        for (var i = 0; i < keys.length; i++) {
          keys[i].onclick = function() {
            var input = document.querySelector('.display');
            var equation = input.innerHTML;
            var btnVal = this.innerHTML;
            var lastChar = equation[equation.length -1];

            //remove leading 0
            if (equation == '0' && operators.indexOf(btnVal) < 0) input.innerHTML = '';

            //clear
            if (btnVal == 'C') {
              input.innerHTML = '0';
              decimalFlag = false;
            }

            //compute
            else if (btnVal == '=') {
              input.innerHTML += ' = ' + eval(equation);
            }

            //one decimal only
            else if (btnVal == '.') {
              if (!decimalFlag){
              input.innerHTML += btnVal;
              decimalFlag = true;
              }
            }

            //if operator is clicked
           else if (operators.indexOf(btnVal) > -1) {
             if (btnVal == '-' && equation == '0') {
                input.innerHTML = '' + btnVal;
              }
             else if (equation != '0'){ 
               if (operators.indexOf(lastChar) > -1) input.innerHTML = equation.replace(/.$/, btnVal);



             else input.innerHTML += btnVal;
           }
           }
                   else
              input.innerHTML += btnVal;

         }
        }
    }
    
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Calculator</h1>
        </header>
        <ul>
          {this.renderCalculations()}
        </ul> 
            <div className='calculator col-md-6'>
                  <div className='row'>
                    <span className='calc-btn'>C</span>
                    <div className='display'>0</div>
                  </div>

                  <div className='row'>
                    <span className='calc-btn'>7</span>
                    <span className='calc-btn'>8</span>
                    <span className='calc-btn'>9</span>
                    <span className='calc-btn'>*</span>
                  </div>

                  <div className='row'>
                    <span className='calc-btn'>4</span>
                    <span className='calc-btn'>5</span>
                    <span className='calc-btn'>6</span>
                    <span className='calc-btn'>/</span>
                  </div>

                  <div className='row'>
                    <span className='calc-btn'>1</span>
                    <span className='calc-btn'>2</span>
                    <span className='calc-btn'>3</span>
                    <span className='calc-btn'>+</span>
                  </div>

                  <div className='row'>
                    <span className='calc-btn'>0</span>
                    <span className='calc-btn'>.</span>
                    <span className='calc-btn'>=</span>
                    <span className='calc-btn'>-</span>
                  </div>
                </div>
            <UserInput />
      </div>
    );
  }
}
export default createContainer(() => {
  return {
    calculations: Calculations.find({}, {limit: 10, sort: {date: -1}}).fetch(),
  };
}, App);