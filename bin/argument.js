const yargs = require('yargs');

const usage = 'todo [option] <value>';

const options = yargs
  .usage(usage)
  .options({
    new: {
      demandOption: false,
      type: 'array',
      describe: 'Add a new todo item to the todo list',
    },
    list: {
      demandOption: false,
      type: 'array',
      describe: 'List todo items depending on the options entered by the user',
    },
    done: {
      demandOption: false,
      type: 'string',
      describe: 'Update a todo item',
    },
    del: {
      demandOption: false,
      type: 'string',
      describe: 'Delete a todo item',
    },
  })
  .help(true).argv;

const option = Object.keys(options)[1]; // Get the option used by the user
const args = options[`${option}`]; // Get the option's argument entered by the user

module.exports = { args, option };
