import { profissionalRepository } from "../../../repositories";
import PreCadastroUseCase from "./PreCadastroUseCase";

const preCadastroUseCase = new PreCadastroUseCase(profissionalRepository);
export { preCadastroUseCase };
