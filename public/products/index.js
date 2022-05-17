const express = require("express");
const {ProductsController } = require('./controller')
const { TKN } = require('../../config/tkn');
const router = express.Router();
const jwt = require('jsonwebtoken');

//const AuthController = require('../auth')
module.exports.carsApi = (app)=> {
  router
    .get('/products', verifyToken,ProductsController.getAllProducts)
    .get('/products/:id', ProductsController.getProduct)
    .post('/product', ProductsController.createProduct)
    .put('/products/:id', ProductsController.updateProduct)
    .delete('/products/:id', ProductsController.deleteProduct)




  app.use('/api/cars', router)
}

const verifyToken = async(req, res, next) => {
  try {
    console.log(req.headers.authorization.split(' ' ,2)[1])
    if (!req.headers.authorization) {
      return res.status(401).send('Unauhtorized Request: Autorization is undefided');
    }
    let token = req.headers.authorization.split(' ' ,2)[1];
    if (token === 'null') {
      return res.status(401).send('Unauhtorized Request Token is null');
    }

    const payload = await jwt.verify(token, TKN.CLAVE);
    console.log(payload)
    if (!payload) {
      return res.status(401).send('Unauhtorized Request');
    }
    req.userId = payload._id;
    next();
  } catch(e) {
    //console.log(e)
    return res.status(401).send('Unauhtorized Request cath');
  }
}
