import { profissionalRepositoryPrecadastro } from "../../../repositories";
import PreCadastroUseCase from "./PreCadastroUseCase";

const preCadastroUseCase = new PreCadastroUseCase(
  profissionalRepositoryPrecadastro
);
export { preCadastroUseCase };
