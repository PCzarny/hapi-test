import { getRepository } from "typeorm";
import { User } from "../models/user";

const Bcrypt = require('bcrypt');

const saltRounds = 10;

export async function createUser ({ username, password }) {
  const user = new User()
  user.username = username;
  user.password = await Bcrypt.hash(password, saltRounds);

  const userRepository = getRepository(User);
  return userRepository.save(user);
}

export async function updateUser (id, params) {
  const userRepository = getRepository(User);
  return userRepository.update(id, params);
}

export async function deleteUser (id) {
  const userRepository = getRepository(User);
  return userRepository.delete(id);
}