
import urlRepositories from "../repositories/urlRepositories.js";
import urlServices from "../services/urlServices.js";
import { Request, Response } from "express";

async function create(req: Request, res: Response) {
    const {url}: {url:string} = req.body
    const token: string = res.locals.token
    try {
        const result:{
            id: number;
            shortUrl: string;
        } = await urlServices.create(url,token);
       
    res.status(201).send(result)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function select(req: Request, res: Response) {
    const {id} = req.params

    try {
        const result: {
            id: number;
            url: string;
            shortUrl: string;
        } = await urlServices.select(id)
        res.status(200).send(result)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function drop(req: Request, res: Response) {
    const {id} = req.params

    try {
       await urlRepositories.drop(id)
        res.sendStatus(204)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default{
    create,
    select,
    drop
}