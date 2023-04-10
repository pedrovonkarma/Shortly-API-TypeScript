import { Router } from "express";
import urlControllers from "../controllers/urlControllers.js";
import { validateDelete } from "../middlewares/validateDeletion.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import urlSchema from "../schemas/urlSchema.js";

const linkRoutes = Router();

linkRoutes.post("/shorten", validateToken,validateSchema(urlSchema) ,urlControllers.create);
linkRoutes.get("/:id", urlControllers.select);
linkRoutes.delete("/:id", validateToken, validateDelete, urlControllers.drop);



export default linkRoutes;