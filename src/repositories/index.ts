import PreCadastroRepository from "./preCadastro";
import CadastroRepository from "./cadastro/cadastroProfissional";
import { profissional, servico } from "../models";
import CadastroRepositoryProfissional from "./cadastro/cadastroProfissional";
import CadastroRepositoryServico from "./cadastro/cadastroServico";
const profissionalRepositoryPrecadastro = new PreCadastroRepository(
  profissional
);
const profissionalRepositoryCadastro = new CadastroRepositoryProfissional(
  profissional
);
const servicoRepositoryCadastro = new CadastroRepositoryServico(servico);
export {
  profissionalRepositoryPrecadastro,
  profissionalRepositoryCadastro,
  servicoRepositoryCadastro,
};
