'use strict';
module.exports = function(app) {
  var controller = require('../controllers/productController');

  // product Routes
  app.route('/products')
    .get(controller.list_all_products)
    .post(controller.create_product);


  app.route('/products/:productId')
    .get(controller.read_product)
    .put(controller.update_product)
    .delete(controller.delete_product);
};