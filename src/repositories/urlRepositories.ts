import db from "../config/database.js";

async function findMaxId() {
    return await db.query(`SELECT MAX(id) FROM links`);
  }
  async function findIdByToken(token:string) {
    return await db.query(`SELECT id FROM users WHERE "token" = $1`, [token]);
  }

  async function create(userId:string, url:string, shortUrl:string) {
    return await db.query(`INSERT INTO links (user_id, url, shorturl) VALUES($1, $2, $3)`, [userId, url, shortUrl]);
  }

  async function selectLinkById(id:string) {
    return await db.query(`SELECT id, url, shorturl FROM links WHERE "id" = $1`, [id])
  }

  async function drop(id:string) {
    return await db.query(`DELETE FROM links WHERE "id" = $1`, [id]);
  }

  

  

  export default{
    findMaxId,
    findIdByToken,
    create,
    selectLinkById,
    drop
  }