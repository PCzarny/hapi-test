import { getRepository } from "typeorm";
import { User } from "../model";

const Bcrypt = require('bcrypt');

const saltRounds = 10;

export async function createUser ({ username, password }) {
  const user = new User()
  user.username = username;
  user.password = await Bcrypt.hash(password, saltRounds);

  const userRepository = getRepository(User);
  return userRepository.save(user);
}