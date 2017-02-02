import React, { Component } from 'react';

export default class Calculator extends Component {
    render () {
        return (
                <div class='calculator'>
                  <div class='row'>
                    <span class='calc-btn'>C</span>
                    <div class='display'>0</div>
                  </div>

                  <div class='row'>
                    <span class='calc-btn'>7</span>
                    <span class='calc-btn'>8</span>
                    <span class='calc-btn'>9</span>
                    <span class='calc-btn'>*</span>
                  </div>

                  <div class='row'>
                    <span class='calc-btn'>4</span>
                    <span class='calc-btn'>5</span>
                    <span class='calc-btn'>6</span>
                    <span class='calc-btn'>/</span>
                  </div>

                  <div class='row'>
                    <span class='calc-btn'>1</span>
                    <span class='calc-btn'>2</span>
                    <span class='calc-btn'>3</span>
                    <span class='calc-btn'>+</span>
                  </div>

                  <div class='row'>
                    <span class='calc-btn'>0</span>
                    <span class='calc-btn'>.</span>
                    <span class='calc-btn'>=</span>
                    <span class='calc-btn'>-</span>
                  </div>
                </div>
        )
    }
}