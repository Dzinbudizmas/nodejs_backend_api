'use strict';

var mongoose = require('mongoose'),
  Orders = mongoose.model('Orders'),
  Users = mongoose.model('Users'),
  Products = mongoose.model('Products');

exports.list_all_orders = function(req, res) {
  Orders.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.create_order = function(req, res) {
  var new_order = new Orders(req.body);
  
  Users.findById(new_order.user, function(err, user) {
    if (err)
      res.send(err);
    Products.findById(new_order.product, function(err, product){
      if (err)
        res.send(err);
      // check if user has enough money
      var pay = new_order.quantity * product.price;
      if (user.money < pay) {
        res.send(new Error("Not enough money"));
      }
      // check if product has enough quantity
      if (product.quantity < new_order.quantity) {
        res.send(new Error("Not enough quantity"));
      }

      // create order
      new_order.save(function(err, order) {
        if (err)
          res.send(err);
        
        // deduct money from user
        user.money -= pay;
        user.save();

        // update product quantity
        product.quantity -= new_order.quantity;
        product.save();

        res.json(order);
      })
    })
  })  
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
