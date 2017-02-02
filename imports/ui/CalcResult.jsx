import React, { Component } from 'react';

export default class CalcResult extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className='calc-result'>
                {this.props.data} calculated by: {this.props.user}
            </div>
        )
    }
}