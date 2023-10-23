const pg = require('pg');

const connect = new pg.Pool({
  user: 'andy',
  host: 'localhost',
  database: 'test',
  password: 'Am2EacSP2vds!',
  port: 5432,
});

module.exports = { connect };
