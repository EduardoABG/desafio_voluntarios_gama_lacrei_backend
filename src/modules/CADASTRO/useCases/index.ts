import {
  profissionalRepositoryCadastro,
  servicoRepositoryCadastro,
} from "../../../repositories";
import CadastroUseCase from "./CadastroUseCase";

const cadastroUseCaseProfissional = new CadastroUseCase(
  profissionalRepositoryCadastro
);
const cadastroUseCaseServico = new CadastroUseCase(servicoRepositoryCadastro);
export { cadastroUseCaseProfissional, cadastroUseCaseServico };
