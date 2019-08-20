import loginController from './controllers/views/login';
import signinController from './controllers/api/signin';
import signoutController from './controllers/api/signout';
import signupController from './controllers/api/signup';

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
  },
  {
    method: 'POST',
    path: '/signup',
    options: { auth: false },
    handler: signupController,
  }
];
