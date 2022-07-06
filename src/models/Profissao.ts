import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Profissao {
  instance: any;
  modelName: string = "Profissao";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        prefixo_profissao: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        profissao: {
          type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
