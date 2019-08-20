import { getUserByUsername } from '../persistance/queries';

const Bcrypt = require('bcrypt');

class NotAutenticatedError extends Error {
}

export default async function authenticate ({ username, password }) {
  const user = await getUserByUsername(username);

  if (!user || !(await Bcrypt.compare(password, user.password))) {
    throw new NotAutenticatedError();
  }

  return user
}