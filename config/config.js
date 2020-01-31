require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "bq_database",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "bq_database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  }
}