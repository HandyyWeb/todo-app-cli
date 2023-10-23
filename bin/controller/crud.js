const {
  addItem,
  listItems,
  updateToDoneItem,
  deleteItem,
} = require('./controller');

const queryDb = (mode, value) => {
  switch (mode) {
    case 'new':
      console.log('add');
      addItem(value);
      break;
    case 'list':
      console.log('list');
      listItems(value);
      break;
    case 'done':
      console.log('update');
      updateToDoneItem(value[0], value[1]);
      break;
    case 'del':
      console.log('delete');
      deleteItem(value);
      break;
    default:
      console.log('Ooops, retry again, no functionalities was founded');
      break;
  }
};

module.exports = queryDb;
