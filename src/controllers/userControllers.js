
import userServices from "../services/userServices.js";

async function create(req, res) {
    const {name, email, password} = req.body
    try {
    await userServices.create(name, email, password)
    res.sendStatus(201)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function signin(req, res) {
    const {email} = req.body
    
    try {
        const obj = userServices.update(email);
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


