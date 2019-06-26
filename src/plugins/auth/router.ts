import loginController from './controllers/login';
import signinController from './controllers/signin';
import signoutController from './controllers/signout';

export default [
  {
    method: 'GET',
    path: '/login',
    options: { auth: false },
    handler: loginController,
  },
  {
    method: 'POST',
    path: '/signin',
    options: { auth: false },
    handler: signinController,
  },
  {
    method: 'POST',
    path: '/signout',
    handler: signoutController,
  }
];
