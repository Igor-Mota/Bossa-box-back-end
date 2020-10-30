// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : "mysql741.umbler.com",
      user : "twixtaxe",
      password : "10121974m",
      database : "bossa_box",
      port:41890
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
