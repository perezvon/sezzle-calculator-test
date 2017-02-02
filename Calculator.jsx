import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>
                <div className='calculator'>
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
                </div>
        )
    }
}