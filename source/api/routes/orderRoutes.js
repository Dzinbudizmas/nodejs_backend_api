'use strict';
module.exports = function(app) {
  var controller = require('../controllers/orderController');

  // order Routes
  app.route('/orders')
    .get(controller.list_all_orders)
    .post(controller.create_order);


  app.route('/orders/:orderId')
    .get(controller.read_order)
    .put(controller.update_order)
    .delete(controller.delete_order);
};