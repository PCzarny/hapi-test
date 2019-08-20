import { createUser } from '../persistance/commands';

export default async function registerUser ({ username, password }) {
  return createUser({ username, password })
}