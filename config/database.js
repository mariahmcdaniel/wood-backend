// strapi-api/config/database.js
module.exports = ({ env }) => {

  const parse = require('pg-connection-string').parse;
  const config = parse(process.env.DATABASE_URL);

  const devConfig = {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'wood_luth_db'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '0000'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false
    },
    debug: false,
  };

  const prodConfig = {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    options: {
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: false,
  };

  return env("NODE_ENV", "development") === "production" ? prodConfig : devConfig

};
