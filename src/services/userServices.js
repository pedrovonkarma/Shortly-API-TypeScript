import userRepositories from "../repositories/userRepositories.js"
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';

async function create(name, email, password ) {
    const passwordE = bcrypt.hashSync(password, 10);
    return await userRepositories.create(name, email, passwordE)
    
  }

  async function update(email) {
    const token = uuid()
    const obj = {token}
    await userRepositories.update(token, email)
    return obj
  }

export default{
    create,
    update
}