import userRepositories from "../repositories/userRepositories.js"
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';

async function create(name, email, password ) {
    const passwordE = bcrypt.hashSync(password, 10);
    return await userRepositories.create(name, email, passwordE)
    
  }

  async function update(email, password) {
    if(!email || !password){
      throw errors.unauthorizedError();
    }
    
        const mail = await userRepositories.findUserByEmail(email)
        if(!mail.rows[0] || !bcrypt.compareSync(password, mail.rows[0].password)){
          throw errors.unauthorizedError();
        }
    const token = uuid()
    const obj = {token}
    await userRepositories.update(token, email)
    return obj
  }

export default{
    create,
    update
}