'use strict';

var mongoose = require('mongoose'),
  Orders = mongoose.model('Orders');

exports.list_all_orders = function(req, res) {
  Orders.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.create_order = function(req, res) {
  var new_order = new Orders(req.body);
  new_order.save(function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.read_order = function(req, res) {
  Orders.findById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update_order = function(req, res) {
  Orders.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.delete_order = function(req, res) {
  Orders.remove({
    _id: req.params.orderId
  }, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};

/*----------------------------
Tasks with Order:
* - check if User has enouhg money
* - Check if Product has enough quantity (if aabove poin pass)
* - create Order
* - deduct money from User
* - update Product quantity
-----------------------------------*/