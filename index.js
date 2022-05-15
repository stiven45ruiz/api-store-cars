const express = require("express");
const { festApi } = require('./public/fests/index');
const { carsApi } = require('./public/products/index');
const { usersApi } = require('./public/users/index');
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
const port = 3090;

app.use(cors());
app.use(bodyParser.json());


festApi(app);
carsApi(app);
usersApi(app);




app.listen(port, ()=>{
  console.log(`my port is ${port}`)
})






