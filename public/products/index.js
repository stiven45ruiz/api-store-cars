const express = require("express");
const {ProductsController } = require('./controller')
const jwt = require('jsonwebtoken');
const router = express.Router();

module.exports.carsApi = (app)=> {
  router
    .get('/products',ProductsController.getAllProducts)
    .get('/products/:id', verifyToken, ProductsController.getProduct)
    .post('/product', ProductsController.createProduct)
    .put('/products/:id', ProductsController.updateProduct)
    .delete('/products/:id', ProductsController.deleteProduct)

  app.use('/api/cars', router)
}
async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}
