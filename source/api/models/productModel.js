'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  title: {
    type: String,
    required: 'Enter title'
  },
  productType: {
    type: String,
    enum: ['furniture', 'food', 'clothes'],
   },
  url: {
    type: String    
  },
  quantity: {
    type: Number,
    required: 'Enter quantity'
  },
  price: {
    type: Number,
    required: 'Enter price'
  }    
});

module.exports = mongoose.model('Products', ProductSchema);