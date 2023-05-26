// Path: ./config/env/production/server.js
// starting from Strapi v 4.6.1 server.js has to be the following

module.exports = ({ env }) => ({
  proxy: true,
  host: "127.0.0.1" || "0.0.0.0",
  port: process.env.PORT,
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
