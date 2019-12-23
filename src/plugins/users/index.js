const { init } = require('./models/user');

const Sequelize = require('sequelize');


function connectDatabase (server) {
  const sequelize = new Sequelize(process.env.DB_URI);

  // Using server.expose(key, value) over server.expose(obj)
  // as the first create reference copy and the second create deep copy
  server.expose('sequelize', sequelize);

  // server.sequelize = sequelize;

  return sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      throw err;
    });
}


async function register (server, options) {
  await connectDatabase(server)
  init(server);
  // server.route(require('./router'))
}

module.exports = {
  name: 'users',
  version: '1.0.0',
  multiple: false,
  register,
};
