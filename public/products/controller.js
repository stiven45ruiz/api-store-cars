const {pool} = require('./../../db');

var fecha = new Date();
  let y = fecha.getFullYear();
  let m = fecha.getMonth() + 1;
  let d = fecha.getDate();
  let h = fecha.getHours();
  let mi = fecha.getMinutes();
  let s = fecha.getSeconds();

  //console.log(y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s);
  fecha = y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;


module.exports.ProductsController = {


  getAllProducts: (req, res)=>{
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
  getProduct: (req, res)=>{
    try {
      const {id} = req.params;
      pool.query(`Select * from products where id=${id}`, (error, result)=>{
        if(error){
          console.log(error)
        }
        res.status(200).send(
          result
        );
      })
    } catch (error) {
      console.error(error)
    }
  },

  createProduct:(req, res)=>{
    const product = req.body;

    try {
      pool.query(
        `INSERT INTO carsclub.products (id, image, title, price, description, typeCar, createdAt, updatedAt)
        VALUES ('${product.id}', '${product.image}','${product.title}', '${product.price}', '${product.description}', '${product.typeCar}', '${fecha}', '${fecha}')`,
        (error, result)=>{
          if(error){
            console.log(error)
          }
          res.status(201).send(
            result
          );
      })

    } catch (error) {
      console.error(error)
    }
  },
  updateProduct:(req, res)=>{
    const id = req.body.id;
    try {
      pool.query(
        `UPDATE carsclub.products SET ?
        WHERE id = ?`, [req.body, id]
      ,(error, result)=>{
        if(error){
          console.log(error)
        }
        res.status(200).send(
          'User updated successfully.',
          result
        );
      })

    } catch (error) {
      console.error(error)
    }
  },





  deleteProduct:(req ,res)=>{
    try {
      const {id} = req.params;
      pool.query(`DELETE FROM products WHERE (id=${id})`, (error, result)=>{
        if(error){
          console.log(error)
        }
        res.status(200).send(
          result
        );
      })
    } catch (error) {
      console.error(error)
    }
  }
  //DELETE FROM `carsclub`.`products` WHERE (`id` = '1245');
}



