const express = require("express");
const {ProductsController } = require('./controller')

const router = express.Router();

module.exports.carsApi = (app)=> {
  router
    .get('/products', ProductsController.getProducts)

  app.use('/api/cars', router)
}
