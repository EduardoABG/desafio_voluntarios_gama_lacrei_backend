import IRepository from "../../../repositories/IRepository";
type PayloadPreCadastroProfissional = {
  estado_atuacao: string;
  nome_completo: string;
  email: string;
  prefixo_profissao: string;
  num_registro: number;
  senha: string;
  termos: boolean;
};
type PayloadPreCadastroProfissao = {
  prefixo_profissao: string;
  num_registro: number;
};

export default class PreCadastroUseCase {
  private repository: IRepository;

  constructor(preCadastroRepository: IRepository) {
    this.repository = preCadastroRepository;
  }

  cadastrarProfissional(payload: PayloadPreCadastroProfissional) {
    const profissionalData = {
      estado_atuacao: payload.estado_atuacao,
      nome_completo: payload.nome_completo,
      email: payload.email,
      prefixo_profissao: payload.prefixo_profissao,
      num_registro: payload.num_registro,
      senha: payload.senha,
      termos: payload.termos,
    };
    const novoProfissional = this.repository.create(profissionalData);
    return novoProfissional;
  }
  cadastrarProfissao(payload: PayloadPreCadastroProfissao) {
    const profissionalData = {
      prefixo_profissao: payload.prefixo_profissao,
      num_registro: payload.num_registro,
    };
    const novoProfissional = this.repository.create(profissionalData);
    return novoProfissional;
  }
}
