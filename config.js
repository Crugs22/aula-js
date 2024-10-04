const { Pool } = require('pg');
const { database } = require('pg/lib/defaults');
require('dotenv').config();

const pool = new ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;