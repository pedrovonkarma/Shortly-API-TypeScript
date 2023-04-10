import errors from "../errors/index.js";
import userRepositories from "../repositories/userRepositories.js";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";

export async function validateDelete(req: Request, res: Response, next: NextFunction){
    const token:string = res.locals.token
    const {id} = req.params
    try{
        const user:QueryResult<any> = await userRepositories.findUserByToken(token);
        const url:QueryResult<any> = await userRepositories.findUserByLink(id);
       
        
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