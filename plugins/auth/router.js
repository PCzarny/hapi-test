module.exports = [
  {
    method: 'GET',
    path: '/login',
    options: { auth: false },
    handler: require('./controllers/login'),
  },
  {
    method: 'POST',
    path: '/signin',
    options: { auth: false },
    handler: require('./controllers/signin'),
  },
  {
    method: 'POST',
    path: '/signout',
    handler: require('./controllers/signout'),
  },
];
