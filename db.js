const mysql = require('mysql2');
const { dbConfig } = require('./config/dbConfig');

const config = {
    host: dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    port: dbConfig.DB_PORT,
    password: dbConfig.DB_PWD,
    database: dbConfig.DB_NAME
}

const pool = mysql.createPool(config);

module.exports = {
    pool
}
