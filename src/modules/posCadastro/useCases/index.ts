import { posCadastroRepository } from "../../../repositories";
import PosCadastroUseCase from "./PosCadastroUseCase";

const posCadastroUseCase = new PosCadastroUseCase(posCadastroRepository);
export { posCadastroUseCase };
