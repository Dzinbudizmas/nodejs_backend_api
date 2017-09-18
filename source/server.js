var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
//UserModel = require('./api/models/userModel'); //created model loading here
//dedu savo
ProductModel = require('./api/models/productModel'); //created model loading here
//OrderModel = require('./api/models/orderModel'); //created model loading here

bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/homeworkdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var userRoutes = require('./api/routes/userRoutes'); //importing route
// userRoutes(app); //register the route

var productRoutes = require('./api/routes/productRoutes'); //importing route
productRoutes(app); //register the route

// var orderRoutes = require('./api/routes/orderRoutes'); //importing route
// orderRoutes(app); //register the route


app.listen(port);


console.log('HomeWork RESTful API server started on: ' + port);