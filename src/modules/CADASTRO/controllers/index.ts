import CadastroController from "./CadastroController";
import {
  cadastroUseCaseProfissional,
  cadastroUseCaseServico,
} from "../useCases";
const cadastroControllerProfissional = new CadastroController(
  cadastroUseCaseProfissional
);
const cadastroControllerServico = new CadastroController(
  cadastroUseCaseServico
);
export { cadastroControllerProfissional, cadastroControllerServico };
