require('dotenv').config();

// Update with your config settings.
const commonConfig = {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
    },
    seeds: {
        directory: './src/database/seeds'
    }
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: commonConfig,
    staging: commonConfig,
    production: commonConfig
};
