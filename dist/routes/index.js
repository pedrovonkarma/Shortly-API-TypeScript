import { Router } from "express";
import linkRoutes from "./linkRoutes.js";
import userRoutes from "./userRoutes.js";
var routes = Router();
routes.use("/users", userRoutes);
routes.use("/urls", linkRoutes);
export default routes;
