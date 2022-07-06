import IRepository from "../IRepository";
import { Profissional } from "../../models/Profissional";

export default class CadastroRepositoryProfissional implements IRepository {
  private CadastroModel: any;

  constructor(CadastroModel: Profissional) {
    this.CadastroModel = CadastroModel.instance;
  }
  async update(
    payload: {
      foto_perfil: string;
      descricao_foto: string;
      sobre: string;
      especialidade: string;
      foto_rosto_carteira: string;
      carta_entrada: string;
    },
    id: any
  ) {
    return this.CadastroModel.update(payload, id, { where: { id } });
  }
  async create(payload: any) {}
  async findAll(payload?: any) {}
  async findById(id: any, payload?: any) {}
  async delete(id: any) {}
}
