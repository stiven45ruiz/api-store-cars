const express = require('express');
const {AuthController} = require('./controller');

const router = express.Router();

module.exports.AuthApi = (app) =>{
  router
    .get('/', AuthController.auth)

    app.use('/api/cars', router);
}
