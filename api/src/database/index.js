const Knex = require("knex");
const configs = require("../../knexfile");

const database = Knex(configs[process.env.NODE_ENV || 'development']);

module.exports = database;
