import { Router } from "express";
import {
  cadastroControllerProfissional,
  cadastroControllerServico,
} from "../controllers";
import auth from "../../../infra/middlewares/auth";

const routes = Router();

routes.post("/:id", /*auth,*/ cadastroControllerProfissional.update());
routes.post("/", /*auth,*/ cadastroControllerServico.create());
export default routes;
