module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', 'https://eric-wood-guitars-backend.herokuapp.com/'),
  port: process.env.PORT || 1337,
  proxy: true,
  app: {
    keys: env.array("APP_KEYS")|| [env("APP_KEY1"), env("APP_KEY2")],
  },
});