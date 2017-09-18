'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'Users',
    required: 'Specify user'
   },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: 'Specify product'
   },
  quantity: {
    type: Number,
    required: 'Enter number'
 },
  createdOn: {
    type: Date
  }    
});

module.exports = mongoose.model('Orders', OrderSchema);