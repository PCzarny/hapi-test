function getUser (request, h) {
  return 'Lalal'
}

async function register (server, options) {
  server.route([
    {
      method: 'GET',
      path: '/{id}',
      handler: getUser,
      config: {
        auth: {
          access: {
            scope: 'user',
          },
        },
      }
    }
  ])
}

export default {
  name: 'users',
  version: '1.0.0',
  multiple: false,
  register,
};