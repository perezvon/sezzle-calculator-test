import React, { Component } from 'react';

export default class UserInput extends Component {
    render () {
        return (
            <div>
                <form>
                <input type="text" id="user" required></input>
                    <button type="submit">Submit Calculation</button>
                </form>
            </div>
        )
    }
}