import { Meteor } from 'meteor/meteor';
import { Calculations } from './calculations.js';

Meteor.methods({
    newCalculation (calc) {
        Calculations.insert(calc);
    }
});