import { Profissional } from "../../models/Profissional";
import IRepository from "../IRepository";

export default class PreCadastroRepository implements IRepository {
  private preCadastroModel: any;

  constructor(preCadastroModel: Profissional) {
    this.preCadastroModel = preCadastroModel.instance;
  }
  async create(payload: {
    estado_atuacao: string;
    nome_completo: string;
    email: string;
    prefixo: string;
    num_registro: number;
    senha: string;
    termos: boolean;
  }) {
    return this.preCadastroModel.create(payload);
  }
  async update(payload: any, id: any) {}
  async findAll(payload?: any) {}
  async findById(id: any, payload?: any) {}
  async delete(id: any) {}
}
