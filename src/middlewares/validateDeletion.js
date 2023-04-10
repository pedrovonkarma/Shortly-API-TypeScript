import errors from "../errors/index.js";
import userRepositories from "../repositories/userRepositories.js";

export async function validateDelete(req, res, next){
    const token = res.locals.token
    const {id} = req.params
    try{
        const user = userRepositories.findUserByToken(token);
        const url = userRepositories.findUserByLink(id)
        if(!url.rows[0]){
            throw errors.unauthorizedError();
        }
        if(url.rows[0].user_id !== user.rows[0].id){
            throw errors.unauthorizedError();
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    next()
}