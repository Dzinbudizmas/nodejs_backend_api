'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  user: [ {
    type: Schema.Types.ObjecId, ref: 'User'
   } ],
  product: [ {
    type: Schema.Types.ObjecId, ref: 'Product'
   } ],
  quantity: {
    type: Number
 },
  createdOn: {
    type: date
  }    
});

module.exports = mongoose.model('Orders', OrderSchema);