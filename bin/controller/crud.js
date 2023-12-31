const {
  addItem,
  listItems,
  updateToDoneItem,
  deleteItem,
} = require('./controller');

const queryDb = (mode, value) => {
  // Select the correct function according to the function the user wants to perform.
  switch (mode) {
    case 'new':
      addItem(value);
      break;
    case 'list':
      listItems(value);
      break;
    case 'done':
      updateToDoneItem(value[0], value[1]);
      break;
    case 'del':
      deleteItem(value);
      break;
    default:
      console.log('Ooops, retry again, no functionalities was founded');
      break;
  }
};

module.exports = queryDb;
