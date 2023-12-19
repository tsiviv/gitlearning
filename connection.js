const { Pool } = require('pg');

// Replace with your PostgreSQL database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tsivi',
  password: 'W!zsoft',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to PostgreSQL. Current time:', res.rows[0].now);
  }
  // pool.end();
});

module.exports = pool;
