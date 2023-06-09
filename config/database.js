// strapi-api/config/database.js
module.exports = ({ env }) => {

  const parse = require('pg-connection-string').parse;
  const config = parse(process.env.DATABASE_URL);

  const devConfig = {
    connection:{
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'wood_luth_db'),
      url: env('PUBLIC_URL'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '0000'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false
    },
    debug: false,
  }
  };

  const prodConfig = {
    connection: {
    client: 'postgres',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    options: {
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
    }
  };

  return env("NODE_ENV", "development") === "production" ? prodConfig : devConfig;

};
