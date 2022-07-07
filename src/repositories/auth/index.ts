import { Profissional } from "../../models/Profissional";
import IRepository from "../IRepository";

export default class AuthRepository implements IRepository {
  private login: any;

  constructor(login: Profissional) {
    this.login = login.instance;
  }
  async find(payload?: { email: string; senha: string }) {
    return this.login.findOne(payload, { where: { email: payload?.email } });
  }
  async findById(payload?: any, id?: any) {}
  async create(payload: any) {}
  async update(payload: any, id: any) {}
  async findAll(payload?: any) {}

  async delete(id: any) {}
}
