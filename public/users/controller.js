const {pool} = require('./../../db');
const jwt = require("jsonwebtoken");
const { TKN } = require('../../config/tkn');

var fecha = new Date();
  let y = fecha.getFullYear();
  let m = fecha.getMonth() + 1;
  let d = fecha.getDate();
  let h = fecha.getHours();
  let mi = fecha.getMinutes();
  let s = fecha.getSeconds();

  //console.log(y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s);
  fecha = y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;

module.exports.UsersController = {



  newUser:(req, res)=>{
    const user = req.body;

    try {
      const token = jwt.sign(user.password, 'TNK')
      pool.query(
        `INSERT INTO carsclub.users
        (name, email, password, role, createdAt, updatedAt)
        VALUES (
          '${user.name}',
          '${user.email}',
          '${token}',
          'user',
          '${fecha}',
          '${fecha}')`,
        (error, result)=>{

          if(error){
            console.log(error)
          }
          res.status(201).json(
            {token}
          );
      })

    } catch (error) {
      console.error(error)
    }
  },


  login:(req, res)=>{
    const user = req.body;
    try {
      const token = jwt.sign(user.password, 'TNK');
      pool.query(
      `SELECT * FROM carsclub.users WHERE email = '${user.email}'`
      ,(error, result)=>{

        const userDB = result[0];
        if(!result[0]) return res.status(401).send("The email doesn't exists");
        if(userDB.password !== token) return res.status(401).send("Wrong Password");

        if (userDB.email===user.email && userDB.password === token) {
          res.status(200).send({
            signed_user: user.email,
            token: token
          });
        } else {
          res.status(403).send({
            errorMessage: 'Authorisation required!'
          });
        };
        if(error){
          console.log(error)
        }
        res.status(201).json(
          result
        );

      })
    }catch (error) {
      res.status(401).send({
        errorMessage: 'Please provide email and password'
      });
    }

  },
  auth:(req, res)=>{
    const user = req.body;
    pool.query(
      `SELECT * FROM carsclub.users WHERE email = '${user.email}'`
      ,(error, result)=>{
        if(!!result[0]) return res.status(401).send("The email exists");
      }
    )
  }
}