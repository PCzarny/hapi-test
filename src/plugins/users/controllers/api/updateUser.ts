import { updateUser } from '../../persistance/commands'
import Boom from '@hapi/boom';
import * as Joi from '@hapi/joi';

export const validate = {
  params: { id: Joi.number().integer().required() },
  payload: { username: Joi.string().optional() }
}

export default async function handler (request, h) {
  try {
    await updateUser(request.params.id, request.payload);
  } catch (error) {
    console.error(error);
    return Boom.internal();
  }
}