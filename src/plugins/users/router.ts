import * as Joi from '@hapi/joi';

import getController from './controllers/api/getUser';
import deleteController from './controllers/api/deleteUser';
import updateController, { validate as updateValidate} from './controllers/api/updateUser';

export default [
  {
    method: 'GET',
    path: '/{id}',
    handler: getController,
    config: {
      validate: {
        params: { id: Joi.number().integer().required() }
      },
      auth: {
        access: { scope: 'user' },
      },
    }
  },
  {
    method: 'DELETE',
    path: '/{id}',
    handler: deleteController,
    config: {
      validate: {
        params: { id: Joi.number().integer().required() }
      },
      auth: {
        access: { scope: 'user' },
      },
    }
  },
  {
    method: 'PUT',
    path: '/{id}',
    handler: updateController,
    config: {
      validate: updateValidate,
      auth: {
        access: { scope: 'user'},
      },
    }
  }
];