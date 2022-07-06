import PreCadastroController from "./PreCadastroController";
import { preCadastroUseCase } from "../useCases";
const preCadastroController = new PreCadastroController(preCadastroUseCase);
export { preCadastroController };
