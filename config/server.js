module.exports = ({ env }) => ({
  host: env('DATABASE_HOST', '0.0.0.0'),
  port: 1337,
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
