import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Horario {
  instance: any;
  modelName: string = "Horario";

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
        hora_inicio: {
          type: DataTypes.TIME,
        },
        hora_fim: {
          type: DataTypes.TIME,
        },
        domingo: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        segunda: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        terca: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        quarta: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        quinta: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        sexta: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        sabado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
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
