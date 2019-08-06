const Hapi = require('hapi');

require('dotenv').config();

async function init () {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  });

  await server.register({ plugin: require('./plugins/auth') });
  await server.register({ plugin: require('./plugins/users') });

  server.route({
    method: 'GET',
    path:'/',
    options: { auth: false },
    handler: (request, h) => {
        return 'Hello World!';
    }
  });

  server.route({
    method: 'GET',
    path:'/dashboard',
    options: { auth: false },
    handler: (request, h) => {
        return 'Dashboard';
    }
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
