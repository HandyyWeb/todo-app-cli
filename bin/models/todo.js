const { connect } = require('../db/dbconnect');
const { args, option } = require('../argument');

const createTable = (queryDB) => {
  connect.query(
    'CREATE TABLE IF NOT EXISTS todo(id BIGSERIAL NOT NULL PRIMARY KEY, task VARCHAR(100) NOT NULL, done BOOLEAN NOT NULL )',
    (error) => {
      if (error) {
        console.log(`There is an error : ${error}`);
      } else {
        console.log(
          `Your todo list was succesfully created ! Start to add some task to be done`
        );
        queryDB(option, args);
      }
    }
  );
};

module.exports = createTable;
