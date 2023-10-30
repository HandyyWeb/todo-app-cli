const { connect } = require('../db/dbconnect');
const { args, option } = require('../argument');

const createTable = (queryDB) => {
  connect.query(
    'CREATE TABLE IF NOT EXISTS todo(id BIGSERIAL NOT NULL PRIMARY KEY, task TEXT NOT NULL, done BOOLEAN NOT NULL )', // Create the todo list table if it doesn't already exist.
    (error) => {
      if (error) {
        console.log(`There is an error : ${error}`);
      } else {
        console.log('Connected to todolist');
        queryDB(option, args);
      }
    }
  );
};

module.exports = createTable;
