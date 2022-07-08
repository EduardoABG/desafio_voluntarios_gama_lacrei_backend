import IRepository from "../IRepository";
import { Profissional } from "../../models/Profissional";

export default class PosCadastroRepository implements IRepository {
  private PosCadastroModel: any;

  constructor(PosCadastroModel: Profissional) {
    this.PosCadastroModel = PosCadastroModel.instance;
  }
  async update(
    payload: {
      pronome_artigo: string;
      etnia: string;
      identidade: string;
      sexualidade: string;
      pcd: string;
      publico_alvo: string;
      rqe: string;
      doencas: string;
      formacao: string;
    },
    id: any
  ) {
    return this.PosCadastroModel.update(payload, { where: { id: id } });
  }
  async create(payload: any) {}
  async findAll(payload?: any) {}
  async findById(id: any, payload?: any) {}
  async delete(id: any) {}
  async find(payload?: any, id?: any) {}
}
