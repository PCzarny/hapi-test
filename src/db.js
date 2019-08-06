const knex = require('knex');
const bookshelf = require('bookshelf');

const knexConnection = knex({
  client: 'pg',
  connection: process.env.DB_URI
})

module.exports = bookshelf(knexConnection);