export default interface IRepository {
  create(payload: any): Promise<any>;
  update(payload: any, id: any, condition?: any): Promise<any>;
  findAll(payload?: any): Promise<any>;
  findById(id: any, payload?: any): Promise<any>;
  delete(id: any): Promise<any>;
}
