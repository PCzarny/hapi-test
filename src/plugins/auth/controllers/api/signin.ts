// TODO: Check DI
import authenticate from '../../../users/useCases/authenticate'

export default async function controller (request, h) {
  const { username, password } = request.payload;
  try {
    const user = await authenticate({ username, password });
    request.cookieAuth.set({ id: user.id });

    return h.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    return h.redirect('/');
  }
}
