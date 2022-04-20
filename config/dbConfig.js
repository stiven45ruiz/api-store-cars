require('dotenv').config();

module.exports.dbConfig = {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_PORT: process.env.DB_PORT
}
