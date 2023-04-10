
import userServices from "../services/userServices.js";
import { Request, Response } from "express";

async function create(req: Request, res: Response) {
    const {name, email, password}:{name:string, email:string, password:string} = req.body
    try {
    await userServices.create(name, email, password)
    res.sendStatus(201)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function signin(req: Request, res: Response) {
    const {email, password} = req.body
    
    try {
        const obj:{token:string} = await userServices.update(email, password);
       
        res.status(200).send(obj)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default{
    create,
    signin
}


