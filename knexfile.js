// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: "^YLP/G*wvVG}*7t*j+a2zAd"
    },
    migrations: {
      directory: './migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './seeds' }
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}`,
    ssl: true,
    migrations: {
      directory: './migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './seeds' }
  }
}

// POSTGRES DEV
  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'localhost',
  //     user: 'postgres',
  //     password: '^YLP/G*wvVG}*7t*j+a2zAd'
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //     tableName: 'dbmigrations'
  //   },
  //   seeds: { directory: './data/seeds' }
  
  // SQLLITE
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/donor-management.sqlite3',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './migrations',
  //   },
  //   seeds: {
  //     directory: './seeds',
  //   },