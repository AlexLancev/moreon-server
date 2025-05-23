// db/database.js
const { Pool } = require('pg');
const config = require('../config/db.config');

const pool = new Pool(config);

module.exports = pool;