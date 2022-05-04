const express = require("express");
const {UsersController } = require('./controller')

const router = express.Router();

module.exports.usersApi = (app)=> {
  router
    .post('/user', UsersController.auth,UsersController.newUser)
    .post('/login', UsersController.login)
    // .get('/users', ProductsController.getAllProducts)
    // .get('/user/:id', ProductsController.getProduct)
    // .put('/user/:id', ProductsController.updateProduct)
    // .delete('/user/:id', ProductsController.deleteProduct)

  app.use('/api/cars', router)
}
