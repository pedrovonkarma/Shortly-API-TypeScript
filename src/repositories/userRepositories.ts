import db from "../config/database.js";

async function findUserByToken(token:string) {
    return await db.query(`SELECT * FROM users WHERE token=$1`,[token]);
  }

  async function findUserByEmail(email:string) {
    return await db.query(`SELECT * FROM users WHERE email=$1`,[email]);
  }
  async function findUserByLink(id:string) {
    
    return await db.query(`SELECT user_id FROM links WHERE "id" = $1`, [id]);
  }

  async function create(name:string, email:string, passwordE:string) {
    return await db.query(`INSERT INTO users (name, email, password) VALUES($1, $2, $3)`, [name, email, passwordE]);
  }

  async function update(token:string, email:string) {
    return await db.query(`UPDATE users SET "token" = $1 WHERE "email" = $2 `, [token, email]);
  }

  export default{
    findUserByToken,
    findUserByLink,
    create,
    update,
    findUserByEmail
  }