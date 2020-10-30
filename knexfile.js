// Update with your config settings.
require("dotenv").config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE,
      port:process.env.DB_PORT
    },
    migrations:{
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database : process.env.DB_DATABAE,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
