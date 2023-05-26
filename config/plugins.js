module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
  },
  graphql: {
    config: {
       endpoint: "/graphql",
       shadowCRUD: true,
       playgroundAlways: true,
       depthLimit: 100,
       apolloServer: {
         tracing: false,
         },
       },
    }
  // ...
});