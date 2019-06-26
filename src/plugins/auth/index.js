const validate = require('./useCases/validateSession');

async function register (server, options) {
  // -------- Basic auth alternative -----------
  // It's possible to register both, to use basic auth for route add `auth: 'simple'` to option

  // await server.register(require('@hapi/basic'));
  // server.auth.strategy('simple', 'basic', { validate: validate.validateSession });

  // -------- Cookie auth ----------------------
  await server.register(require('@hapi/cookie'));

  server.auth.strategy('session', 'cookie', {
    cookie: {
        name: 'sid-token',
        password: process.env.AUTH_COOKIE_SECURE,
        isSecure: !process.env.IN_DEVELOPMENT,
        ttl: 7 * 24 * 60 * 60 * 1000 // 1 week session
    },
    redirectTo: '/login',
    validateFunc: validate.validateSession
  });

  server.auth.default('session');

  server.route(require('./router'))
}

module.exports = {
  name: 'auth',
  version: '1.0.0',
  multiple: false,
  register,
};
