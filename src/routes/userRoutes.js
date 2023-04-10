import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import userSchema from "../schemas/userSchema.js";

const userRoutes = Router();

userRoutes.post("/signup", validateSchema(userSchema) , userControllers.create)
userRoutes.post("/signin", userControllers.signin)

export default userRoutes;