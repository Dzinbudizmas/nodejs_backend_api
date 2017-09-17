'use strict';
module.exports = function(app) {
  var controller = require('../controllers/userController');

  // user Routes
  app.route('/users')
    .get(controller.list_all_users)
    .post(controller.create_user);


  app.route('/users/:userId')
    .get(controller.read_user)
    .put(controller.update_user)
    .delete(controller.delete_user);
};