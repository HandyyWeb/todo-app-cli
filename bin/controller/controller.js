const { connect } = require('../db/dbconnect');

const addItem = (value) => {
  const todo = value.reduce((acc, cur) => `${acc} ${cur}`, ''); // Parse the array, in the case of a sentence, to a string

  connect.query(
    `INSERT INTO todo(task, done) VALUES('${todo}', false)`,
    (error) => {
      if (error) {
        throw error;
      } else {
        console.log('Your new todo was successfully added');
      }
      console.log('Addition finished');
    }
  );
};
const listItems = (value) => {
  switch (value[0]) {
    case 'all':
      connect.query('SELECT * FROM todo', (error, results) => {
        if (error) {
          throw error;
        } else {
          results.rows.forEach((row) => {
            console.log(row);
          });
        }
        console.log('Listing finished');
      });
      break;
    case 'done':
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
          console.log('Listing finished');
        }
      );
      break;
    case 'pending':
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
          console.log('Listing finished');
        }
      );
      break;
    default:
      break;
  }
};
const updateToDoneItem = (id) => {
  connect.query(
    `UPDATE todo SET done = 'true' WHERE id = ${id} `,
    (error, results) => {
      if (error) {
        throw error;
      } else {
        results.rows.forEach((row) => {
          console.log(row);
        });
      }
      console.log('Update finished');
    }
  );
};
const deleteItem = (id) => {
  // Delete the todo from the table corresponding to this ID
  connect.query(`DELETE FROM todo WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    } else {
      results.rows.forEach((row) => {
        console.log(row);
      });
    }
  });
  connect.query(
    "SELECT setval('todo_id_seq', COALESCE((SELECT id FROM todo ORDER BY id DESC LIMIT 1), 1))", // Reset the id sequence to the last id in the table ( SELECT statement) or, if there are no todo within the table ( the SELECT return NULL ), use 0 as a value ( COALESCE statement )
    (error) => {
      if (error) {
        throw error;
      }
      console.log('Deletion finished');
    }
  );
};

module.exports = {
  addItem,
  listItems,
  updateToDoneItem,
  deleteItem,
};
