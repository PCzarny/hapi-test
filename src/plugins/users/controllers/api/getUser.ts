import { getUserById } from '../../persistance/queries'
import { getUsersDetails } from '../../serializers/user'
import Boom from '@hapi/boom';

export default async function controller (request, h) {
  try {
    const user = await getUserById(request.params.id);

    if (!user) return Boom.notFound('user doesn\'t exist');

    return getUsersDetails(user);
  } catch (error) {
    console.error(error);
    return Boom.internal();
  }
}