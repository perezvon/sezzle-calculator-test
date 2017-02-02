import Calculations from './calculations.js';

Meteor.methods({
    newCalculation (calc) {
        Calculations.insert(calc);
    }
});