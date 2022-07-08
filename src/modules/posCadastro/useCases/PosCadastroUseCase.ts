import IRepository from "../../../repositories/IRepository";

type PayloadPosCadastroProfissional = {
  pronome_artigo: string;
  etnia: string;
  identidade: string;
  sexualidade: string;
  pcd: string;
  publico_alvo: string;
  rqe?: string;
  doencas: string;
  formacao: string;
};

export default class PosCadastroUseCase {
  private repository: IRepository;

  constructor(posCadastroRepository: IRepository) {
    this.repository = posCadastroRepository;
  }

  cadastrarProfissional(payload: PayloadPosCadastroProfissional, id: any) {
    const profissionalData = {
      pronome_artigo: payload.pronome_artigo,
      etnia: payload.etnia,
      identidade: payload.identidade,
      sexualidade: payload.sexualidade,
      pcd: payload.pcd,
      publico_alvo: payload.publico_alvo,
      rqe: payload.rqe,
      doencas: payload.doencas,
      formacao: payload.formacao,
    };
    const iformacoesProfissional = this.repository.update(profissionalData, id);
    return iformacoesProfissional;
  }
}
