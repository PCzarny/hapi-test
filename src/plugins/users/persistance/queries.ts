import { getRepository } from "typeorm";
import { User } from "../model";

export async function getUserById (id) {
  const userRepository = getRepository(User);
  return userRepository.findOne(id)
}

export async function getUserByUsername (username) {
  const userRepository = getRepository(User);
  return userRepository.findOne({ username })
}