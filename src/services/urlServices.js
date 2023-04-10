
import urlRepositories from "../repositories/urlRepositories.js";
import errors from "../errors/index.js";

import { nanoid } from "nanoid";

async function create(url,token ) {
    const shortUrl = nanoid(8)
    let id = await urlRepositories.findMaxId();
    id = id.rows[0].max +1
    let userId = await urlRepositories.findIdByToken(token)
    userId = userId.rows[0].id
    await urlRepositories.create(userId, url, shortUrl)
       const obj = {id, shortUrl}
       return obj
  }

  async function select( id ) {
    let obj = await urlRepositories.selectLinkById(id);
  if(!obj.rows[0]){
    throw errors.notFoundError();}
   const obj2 = {id: obj.rows[0].id, url:obj.rows[0].url, shortUrl:obj.rows[0].shorturl}
   return obj2
  }

  
  

export default{
    create,
    select
}