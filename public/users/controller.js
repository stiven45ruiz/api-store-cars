const {pool} = require('./../../db');

module.exports.UsersController = {

  createProduct:(req, res)=>{
    const user = req.body;

    try {
      pool.query(
        `INSERT INTO carsclub.products
        (id, name, email, password, createdAt, updatedAt)
        VALUES (
          '${user.id}',
          '${user.name}',
          '${user.email}',
          '${user.password}',
          'user',
          '${fecha}',
          '${fecha}')`,
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
}
