// Update with your config settings.
const localPgConnection = {
  // placeholder since there is no pg locally
  host: "localhost",
  database: "postgres",
  user: "postgres",
  password: '^YLP/G*wvVG}*7t*j+a2zAd'
};

const prodDbConnection = process.env.DATABASE_URL || localPgConnection;


module.exports = {
 development: {
    client: 'sqlite3',
    connection: {
      filename: './data/donor-management.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
production: {
      client: "postgresql",
      connection: prodDbConnection,
      migrations: {
        directory: "./migrations"
      },
      seeds: {
        directory: "./seeds"
      }
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