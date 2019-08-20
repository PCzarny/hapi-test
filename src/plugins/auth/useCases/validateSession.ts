// TODO: Check DI
import { getUserById } from '../../users/persistance/queries'

export async function validateSession (request, session) {
  const account = await getUserById(session.id);

  if (!account) {
      return { valid: false };
  }

  return { valid: true, credentials: account };
}
