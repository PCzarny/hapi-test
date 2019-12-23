const Hapi = require('hapi');
// const Sequelize = require('sequelize');

require('dotenv').config();

// function connectDatabase (server) {
//   const sequelize = new Sequelize(process.env.DB_URI);

//   // Using server.expose(key, value) over server.expose(obj)
//   // as the first create reference copy and the second create deep copy
//   // server.expose('sequelize', sequelize);

//   server.sequelize = sequelize;

//   return sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database:', err);
//       throw err;
//     });
// }


async function init () {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  });

  // await connectDatabase(server);

  await server.register({ plugin: require('./plugins/users') });
  await server.register({ plugin: require('./plugins/auth') });

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
