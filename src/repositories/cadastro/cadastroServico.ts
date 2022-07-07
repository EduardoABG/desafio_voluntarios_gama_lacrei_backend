import IRepository from "../IRepository";
import { Servico } from "../../models/Servico";

export default class CadastroRepositoryServico implements IRepository {
  private CadastroModel: any;

  constructor(CadastroModel: Servico) {
    this.CadastroModel = CadastroModel.instance;
  }
  async create(payload: {
    nome: string;
    duracao: string;
    valor: number;
    modalidade: string;
    profissional_id: number;
  }) {
    return this.CadastroModel.create(payload);
  }
  async update(payload: any, id: any) {}
  async findAll(payload?: any) {}
  async findById(id: any, payload?: any) {}
  async delete(id: any) {}
  async find(payload?: any, id?: any) {}
}
