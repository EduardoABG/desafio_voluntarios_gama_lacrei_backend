import { Router } from "express";
import {
  cadastroControllerProfissional,
  cadastroControllerServico,
} from "../controllers";
//import auth from "../../../infra/middlewares/auth";
import upload from "../../../infra/middlewares/upload";

const routes = Router();

routes.post(
  "/:id",
  /*auth,*/ upload.single("foto_perfil"),
  upload.single("foto_rosto_carteira"),
  cadastroControllerProfissional.update()
);
routes.post("/", /*auth,*/ cadastroControllerServico.create());
export default routes;
