import { Mongo } from 'meteor/mongo';

export const Calculations = new Mongo.Collection('calculations');

Calculations.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Calculations.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});