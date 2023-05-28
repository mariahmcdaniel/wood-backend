module.exports = ({ env }) => ({
  host: env("DATABASE_HOST", "0.0.0.0"),
  port: process.env.PORT || env.int('DATABASE_PORT'),
  url: env("MY_HEROKU_URL", "https://eric-wood-guitars-backend.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS")|| [env("APP_KEY1"), env("APP_KEY2")],
  },
});