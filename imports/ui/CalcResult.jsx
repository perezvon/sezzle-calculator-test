import React, { Component } from 'react';

export default class CalcResult extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <li className='calc-result'>
                {this.props.calc.data} calculated by: {this.props.calc.user}
            </li>
        )
    }
}