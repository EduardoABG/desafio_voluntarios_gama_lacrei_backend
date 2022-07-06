import routesPreCadastro from "../../modules/preCadastro/routes";
import { Router } from "express";

const routes = Router();
routes.use("/precadastro", routesPreCadastro);

export default routes;
