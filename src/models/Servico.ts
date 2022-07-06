import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Servico {
  instance: any;
  modelName: string = "Servico";

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
        nome: {
          type: DataTypes.STRING,
        },
        duracao: {
          type: DataTypes.STRING,
        },
        valor: {
          type: DataTypes.STRING,
        },
        modalidade: {
          type: DataTypes.STRING,
        },
        profissional_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: "profissional",
            },
            key: "id",
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
