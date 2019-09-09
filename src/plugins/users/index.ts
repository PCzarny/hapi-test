import router from './router';

function register (server, options) {
  server.route(router)
}

export default {
  name: 'users',
  version: '1.0.0',
  multiple: false,
  register,
};