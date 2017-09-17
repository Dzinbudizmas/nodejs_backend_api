'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter first name'
  },
  lastName: {
    type: String,
    required: 'Enter last name'
  },
  money: {
    type: Number
  }  
});

module.exports = mongoose.model('Users', UserSchema);