const pg = require('pg');

const connect = new pg.Pool({
  user: // -- Your user name on PostgreSQL --,
  host: 'localhost',
  database: // -- Your database name on PostgreSQL --,
  password: // -- Your user password on PostgreSQL --,
  port: 5432,
});

module.exports = { connect };
