import PreCadastroRepository from "./preCadastro";
import AuthRepository from "./auth";
import { profissional, servico } from "../models";
import CadastroRepositoryProfissional from "./cadastro/cadastroProfissional";
import CadastroRepositoryServico from "./cadastro/cadastroServico";
import PosCadastroRepository from "./posCadastro";
const profissionalRepositoryPrecadastro = new PreCadastroRepository(
  profissional
);
const profissionalRepositoryCadastro = new CadastroRepositoryProfissional(
  profissional
);
const servicoRepositoryCadastro = new CadastroRepositoryServico(servico);
const authRepository = new AuthRepository(profissional);
const posCadastroRepository = new PosCadastroRepository(profissional);
export {
  profissionalRepositoryPrecadastro,
  profissionalRepositoryCadastro,
  servicoRepositoryCadastro,
  authRepository,
  posCadastroRepository,
};
