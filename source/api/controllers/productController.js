'use strict';

var mongoose = require('mongoose'),
  Products = mongoose.model('Products');

exports.list_all_products = function(req, res) {
    Products.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_product = function(req, res) {
  var new_product = new Products(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.read_product = function(req, res) {
  Products.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_product = function(req, res) {
    Products.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete_product = function(req, res) {
  Products.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};

