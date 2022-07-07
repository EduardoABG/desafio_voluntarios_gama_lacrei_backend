import routesPreCadastro from "../../modules/preCadastro/routes";
import routesCadastro from "../../modules/cadastro/routes";
import routesAtuh from "../../modules/auth/routes";
import { Router } from "express";

const routes = Router();
routes.use("/precadastro", routesPreCadastro);
routes.use("/cadastro", routesCadastro);
routes.use("/auth", routesAtuh);

export default routes;
