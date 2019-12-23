import "reflect-metadata";

import * as hapi from "hapi";
import { createConnection } from "typeorm";

import authPlugin from './plugins/auth';
import usersPlugin from './plugins/users';

require('dotenv').config();

async function createServer () {
  const server: hapi.Server = new hapi.Server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  });


  await createConnection();

  await server.register(authPlugin);
  await server.register(usersPlugin, { routes: { prefix: '/users' } });

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

  return server;
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

export async function init () {
  const server = await createServer();

  await server.initialize();
  return server;
}

export async function start () {
  const server = await createServer();

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  return server;
}

init();
