import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Calculations } from '../api/calculations/calculations.js'; 
export default class UserInput extends Component {
    constructor(props) {
        super (props);
        
    }
    
    handleSubmit (e) {
        e.preventDefault();
        let user = $('#user').val();
        let data = $('.display').html();
        let date = new Date();
        let calc = {
            user: user,
            data: data,
            date: date
        }
        console.log(calc);
        Calculations.insert(calc);
        $('.display').html('0');
    }
    
    render () {
        return (
            <div className='col-md-6'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user">User Name: </label>
                <input type="text" id="user" required></input>
                    <button type="submit">Submit Calculation</button>
                </form>
            </div>
        )
    }
}