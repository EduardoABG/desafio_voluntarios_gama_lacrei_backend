import { Router } from "express";
import {
  cadastroControllerProfissional,
  cadastroControllerServico,
} from "../controllers";

const routes = Router();

routes.post("/profissional/:id", cadastroControllerProfissional.update());
routes.post("/servicos", cadastroControllerServico.create());
export default routes;
