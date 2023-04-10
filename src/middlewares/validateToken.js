import errors from "../errors/index.js";
import userRepositories from "../repositories/userRepositories.js";

export async function validateToken(req, res, next){
    const { authorization } = req.headers;
    
    const token = authorization?.replace('Bearer ', '');
    if (!token) throw errors.unauthorizedError();
    try{
        const user = await userRepositories.findUserByToken(token);
        
        if(!user.rows[0]){
            throw errors.unauthorizedError();
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    res.locals.token = token;
    next()
}