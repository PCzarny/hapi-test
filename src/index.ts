import * as hapi from "hapi";
import authPlugin from './plugins/auth';

require('dotenv').config();

async function init () {
  const server: hapi.Server = new hapi.Server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  });

  await server.register(authPlugin);

  server.route({
    method: 'GET',
    path:'/',
    options: { auth: false },
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
        return 'Hello World!';
    }
  });

  server.route({
    method: 'GET',
    path:'/dashboard',
    options: { auth: false },
    handler: (request: hapi.Request, reply: hapi.ResponseToolkit) => {
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