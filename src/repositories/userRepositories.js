import db from "../config/database.js";

async function findUserByToken(token) {
    return await db.query(`SELECT * FROM users WHERE token=$1`,[token]);
  }
  async function findUserByLink(id) {
    return await db.query(`SELECT user_id FROM links WHERE "id" = $1`, [id]);
  }

  async function create(name, email, passwordE) {
    return await db.query(`INSERT INTO users (name, email, password) VALUES($1, $2, $3)`, [name, email, passwordE]);
  }

  async function update(token, email) {
    return await db.query(`UPDATE users SET "token" = $1 WHERE "email" = $2 `, [token, email]);
  }

  export default{
    findUserByToken,
    findUserByLink,
    create,
    update
  }