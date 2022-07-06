import IRepository from "../../../repositories/IRepository";
type PayloadCadastroProfissional = {
  foto_perfil: string;
  descricao_foto: string;
  sobre: string;
  especialidade: string;
  foto_rosto_carteira: string;
  carta_entrada: string;
};
type PayloadCadastroServico = {
  nome: string;
  duracao: string;
  valor: number;
  modalidade: string;
  profissional_id: number;
};

export default class CadastroUseCase {
  private repository: IRepository;

  constructor(cadastroRepository: IRepository) {
    this.repository = cadastroRepository;
  }

  cadastrarProfissional(payload: PayloadCadastroProfissional, id: any) {
    const profissionalData = {
      foto_perfil: payload.foto_perfil,
      descricao_foto: payload.descricao_foto,
      sobre: payload.sobre,
      especialidade: payload.especialidade,
      foto_rosto_carteira: payload.foto_rosto_carteira,
      carta_entrada: payload.carta_entrada,
    };
    const novoProfissional = this.repository.update(profissionalData, id);
    return novoProfissional;
  }
  cadastrarServico(payload: PayloadCadastroServico) {
    const servicoData = {
      nome: payload.nome,
      duracao: payload.duracao,
      valor: payload.valor,
      modalidade: payload.modalidade,
      profissional_id: payload.profissional_id,
    };
    const novoServico = this.repository.create(servicoData);
    return novoServico;
  }
}
