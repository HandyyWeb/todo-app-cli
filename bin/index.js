#!/usr/bin/env node

// Modules
const queryDb = require('./controller/crud');
const createTable = require('./models/todo');

// Main
// console.log(`The mode is : ${option} and the value is ${args}`);

createTable(queryDb);
