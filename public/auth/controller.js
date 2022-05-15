
const jwt = require('jsonwebtoken');
const { TKN } = require('../../config/tkn');

module.exports.AuthController = {
  generateAccessToke: (user) =>{
    return jwt.sign(user, TKN.CLAVE)
  },


}



