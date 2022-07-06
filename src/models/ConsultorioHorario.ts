import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class ConsultorioHorario {
  instance: any;
  modelName: string = "Consultorio-Horario";

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
        consultorio_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: "consultorio",
            },
            key: "id",
          },
        },
        horario_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: "horario",
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