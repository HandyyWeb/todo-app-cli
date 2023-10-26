# todo-app-cli

> A CLI tool to manage your todo list from the CLI ! Made with Node.js and PostgreSQL.

# Screenshot

![Cli screenshot](./assets/Screenshot.png)

# Get Started

First, clone the repository and install all the packages

    git clone https://github.com/HandyyWeb/todo-app-cli.git
    npm install

Then, you can install the comand globally

    npm install -g

# Prerequisites

You need to have postgreSQL installed on your computer, for further information, take a look at the link : [Installation](https://www.postgresql.org/download/)

Then, use your user account, your databse and your password in the file bin/db/dbconnect.js to connect to your database.

```
const pg = require('pg');

const connect = new pg.Pool({
  user: --Your user account--,
  host: 'localhost',
  database:  --Your database name--,
  password: --Your password--,
  port: 5432,
});

module.exports = { connect };

```

# Documentation

This command allow you to create a todo list and to manage it thanks to 4 options

- list [all || done || pending]
- add [value]
- del [id]
- done [id]

## List todos

Use `todo --list [all || done || peding]` to list respectively all the todos, the todos that is done and the todo that need to be done.

Example

![List tasks](screenshots/s3.png)

![Add a new task](screenshots/s5.png)

## Add a new todo

Use `todo --new [name]` to add a new todo within the todolist with the corresponding name.

Example

![Add a new task](screenshots/s2.png)

## Update a todo

Use `todo --done [id]` to update the todo state, designated by the id.

Example

![Update a task](screenshots/s4.png)

## Delete a todo

Use `todo --del [id]` to delete the todo designated by the id.

Example

![Delete a task](screenshots/s6.png)

# Other libraries

pg (PostgreSQL client for Node.js) : [Node-postgres Documentation](https://node-postgres.com/)

# Contact

Andy Lebreton

E-mail : lebreton.andy@proton.me
