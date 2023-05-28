module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0" || process.env.HOST,
  port: process.env.PORT || 5432,
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
