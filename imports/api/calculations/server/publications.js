import { Calculations } from "../calculations.js" 

Meteor.publish( 'calculations', () => {
  return Calculations.find();
});