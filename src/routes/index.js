import { Router } from "express";
import linkRoutes from "./linkRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/urls", linkRoutes);

export default routes;