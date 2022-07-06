import IRepository from "../../../repositories/IRepository";
type PayloadPreCadastro = {
  estado_atuacao: string;
  nome_completo: string;
  email: string;
  prefixo: string;
  num_registro: number;
  senha: string;
  termos: boolean;
};

export default class PreCadastroUseCase {
  private repository: IRepository;

  constructor(preCadastroRepository: IRepository) {
    this.repository = preCadastroRepository;
  }

  cadastrarProfissional(payload: PayloadPreCadastro) {
    const profissionalData = {
      estado_atuacao: payload.estado_atuacao,
      nome_completo: payload.nome_completo,
      email: payload.email,
      prefixo: payload.prefixo,
      num_registro: payload.num_registro,
      senha: payload.senha,
      termos: payload.termos,
    };
    const novoProfissional = this.repository.create(profissionalData);
    return novoProfissional;
  }
}
