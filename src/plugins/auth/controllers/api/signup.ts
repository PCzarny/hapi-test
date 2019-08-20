// TODO: Check DI
import registerUser from '../../../users/useCases/registerUser';
import Boom from '@hapi/boom';

export default async function controller (request, h) {
  const { username, password } = request.payload;
  try {
    const user = await registerUser({ username, password });

    // TODO: Add serializer
    return user;
  } catch (error) {
    console.error(error);
    return Boom.badRequest('invalid params');
  }
}
