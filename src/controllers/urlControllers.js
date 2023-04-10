
import urlRepositories from "../repositories/urlRepositories.js";
import urlServices from "../services/urlServices.js";

async function create(req, res) {
    const {url} = req.body
    const token = res.locals.token
    try {
        const result = urlServices.create(url,token);
       
    res.status(201).send(result)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function select(req, res) {
    const {id} = req.params

    try {
        const result = urlServices.select(id)
        res.status(200).send(result)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function drop(req, res) {
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