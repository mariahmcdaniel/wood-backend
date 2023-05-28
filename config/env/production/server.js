module.exports = ({ env }) => ({
  port: process.env.PORT || env.int('DATABASE_PORT'),
  url: env('PUBLIC_URL'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS")|| [env("APP_KEY1"), env("APP_KEY2")],
  },
});