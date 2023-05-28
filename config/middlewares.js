// module.exports = [
//   'strapi::errors',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'connect-src': ["'self'", 'https:', 'https://eric-wood-guitars-backend.herokuapp.com'],
//           'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
//           'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   {
//     name: 'strapi::cors',
//     config: {
//       origin: ['*', 'http://localhost:1337'],
//       headers: ['*'],
//     },
//   },
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   {
//     name: 'strapi::favicon',
//     config: {
//       path: './public/uploads/guitar-icon.ico'
//     },
//   },
//   'strapi::public',
// ];


module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          'style-src': ["'self'", "'unsafe-inline'"],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'connect-src': ["'self'", 'https:', 'https://eric-wood-guitars-backend.herokuapp.com'],
          'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
          'worker-src': ["'self'", 'blob:'],
          'manifest-src': ["'self'"],
          'frame-src': ["'self'"],
          'frame-ancestors': ["'self'"],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['*', 'http://localhost:1337'],
      headers: ['*'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  {
    name: 'strapi::favicon',
    config: {
      path: './public/uploads/guitar-icon.ico',
    },
  },
  'strapi::public',
];

