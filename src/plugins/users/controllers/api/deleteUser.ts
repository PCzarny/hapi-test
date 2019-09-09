import { deleteUser } from '../../persistance/commands'
import Boom from '@hapi/boom';

export default async function handler (request, h) {
  try {
    await deleteUser(request.params.id);
  } catch (error) {
    console.error(error);
    return Boom.internal();
  }
}