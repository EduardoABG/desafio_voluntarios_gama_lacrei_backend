import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Especialidade {
  instance: any;
  modelName: string = "Especialidade";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        especialidade: {
          type: DataTypes.STRING,
        },
        profissao_id: {
          type: DataTypes.STRING,
          references: {
            model: {
              tableName: "profissao",
            },
            key: "prefixo",
          },
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
