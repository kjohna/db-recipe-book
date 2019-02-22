// Update with your config settings.
// use path module to make db connection path dynamic:
const path = require('path');
const dbPath = path.resolve(__dirname, 'data', 'recipe_book.sqlite3');
// console.log("dbPath: ", dbPath);

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: dbPath
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  
};
