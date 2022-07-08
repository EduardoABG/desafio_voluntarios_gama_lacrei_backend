import { Router } from "express";
import { posCadastroController } from "../controllers";
// import auth from "../../../infra/middlewares/auth";

const routes = Router();

routes.post("/:id", /*auth,*/ posCadastroController.update());

export default routes;
