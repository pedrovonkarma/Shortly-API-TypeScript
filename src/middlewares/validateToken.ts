import errors from "../errors/index.js";
import userRepositories from "../repositories/userRepositories.js";

import { Request, Response, NextFunction } from "express";

export async function validateToken(req: Request, res: Response, next: NextFunction){
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