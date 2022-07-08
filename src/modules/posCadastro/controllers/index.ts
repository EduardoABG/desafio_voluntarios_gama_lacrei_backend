import PosCadastroController from "./PosCadastroController";
import { posCadastroUseCase } from "../useCases";
const posCadastroController = new PosCadastroController(posCadastroUseCase);
export { posCadastroController };
