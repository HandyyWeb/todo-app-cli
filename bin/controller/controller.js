const { connect } = require('../db/dbconnect');

const addItem = (value) => {
  connect.query(
    `INSERT INTO todo(task, done) VALUES('${value}', false)`,
    (error, results) => {
      // To be done
      if (error) {
        throw error;
      } else {
        console.log('Your new todo was successfully added');
      }
    }
  );
};
const listItems = (value) => {
  switch (value[0]) {
    case 'all':
      console.log('all');
      connect.query('SELECT * FROM todo', (error, results) => {
        if (error) {
          throw error;
        } else {
          results.rows.forEach((row) => {
            console.log(row);
          });
        }
      });
      break;
    case 'done':
      console.log('done');
      connect.query(
        'SELECT * FROM todo WHERE done = true',
        (error, results) => {
          if (error) {
            throw error;
          } else {
            results.rows.forEach((row) => {
              console.log(row);
            });
          }
        }
      );
      break;
    case 'pending':
      console.log('pending');
      connect.query(
        'SELECT * FROM todo WHERE done = false',
        (error, results) => {
          if (error) {
            throw error;
          } else {
            results.rows.forEach((row) => {
              console.log(row);
            });
          }
        }
      );
      break;
    default:
      break;
  }
};
const updateToDoneItem = (id, value) => {
  // To be done
  connect.query(
    `UPDATE FROM todo SET task = ${value} WHERE id = ${id} `,
    (error, results) => {
      if (error) {
        throw error;
      } else {
        results.rows.forEach((row) => {
          console.log(row);
        });
      }
    }
  );
};
const deleteItem = (id) => {
  // To be donne
  connect.query(`DELETE FROM todo WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    } else {
      results.rows.forEach((row) => {
        console.log(row);
      });
    }
  });
};

module.exports = {
  addItem,
  listItems,
  updateToDoneItem,
  deleteItem,
};
