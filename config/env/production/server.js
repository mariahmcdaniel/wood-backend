module.exports = ({ env }) => ({
  proxy: true,
  host: "127.0.0.1" || "0.0.0.0",
  port: process.env.PORT || env.int('DATABASE_PORT'),
  url: env('MY_HEROKU_URL'),
  app: { 
    keys: env.array('APP_KEYS') || [env('APP_KEY1'), env('APP_KEY2')]
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})
