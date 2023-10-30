#!/usr/bin/env node

// Modules
const queryDb = require('./controller/crud');
const createTable = require('./models/todo');

// Main

createTable(queryDb);
