import { Router } from "express";
import {
  cadastroControllerProfissional,
  cadastroControllerServico,
} from "../controllers";

const routes = Router();

routes.post("/:id", cadastroControllerProfissional.update());
routes.post("/", cadastroControllerServico.create());
export default routes;
