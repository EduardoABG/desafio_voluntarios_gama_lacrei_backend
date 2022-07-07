import { Router } from "express";
import { authController } from "../controllers";

const routes = Router();

routes.post("/", authController.login());

export default routes;
