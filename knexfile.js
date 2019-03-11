// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'localhost',
      user: 'postgres',
      password: '^YLP/G*wvVG}*7t*j+a2zAd'
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './data/seeds' }
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}`,
    ssl: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './data/seeds' }
  }
}