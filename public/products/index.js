const express = require("express");
const {ProductsController } = require('./controller')

const router = express.Router();

module.exports.carsApi = (app)=> {
  router
    .get('/products', ProductsController.getAllProducts)
    .get('/products/:id', ProductsController.getProduct)
    .post('/product', ProductsController.createProduct)
    .put('/products/:id', ProductsController.updateProduct)
    .delete('/products/:id', ProductsController.deleteProduct)

  app.use('/api/cars', router)
}
