const express = require("express");
const { festApi } = require('./public/fests/index');
const { carsApi } = require('./public/products/index');
const cors = require("cors");

const app = express();
app.use(express.json());
const port = 3090;

app.use(cors());

festApi(app);
carsApi(app);



app.listen(port, ()=>{
  console.log(`my port is ${port}`)
})






