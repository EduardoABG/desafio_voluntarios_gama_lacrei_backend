import routesPreCadastro from "../../modules/preCadastro/routes";
import routesCadastro from "../../modules/cadastro/routes";
import { Router } from "express";

const routes = Router();
routes.use("/precadastro", routesPreCadastro);
routes.use("/cadastro", routesCadastro);

export default routes;
