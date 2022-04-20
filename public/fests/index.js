const express = require("express");
const { FestController } = require('./controller')

const router = express.Router();

module.exports.festApi = (app)=> {
  router
    .get('/list', FestController.getAllFests)
    .post('/newFests', FestController.newFest);

  app.use('/api/fest', router)
}
