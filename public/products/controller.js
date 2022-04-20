const {pool} = require('./../../db');



module.exports.ProductsController = {

  getProducts: (req, res)=>{
    try {
      pool.query('select * from products', (error, result)=>{
        if(error){
          console.log(error)
        }
        res.status(200).send(
          result
        );
      });
    } catch (error) {
      console.error(error);
    }
  },
}
