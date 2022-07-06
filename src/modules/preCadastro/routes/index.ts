import { Router } from "express";
import { preCadastroController } from "../controllers";

const routes = Router();

routes.post("/", preCadastroController.create());

export default routes;
