import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Consultorio {
  instance: any;
  modelName: string = "Consultorio";

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
        profissional_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: "profissional",
            },
            key: "id",
          },
        },
        nome: {
          type: DataTypes.STRING,
        },
  
        //ENDEREÇO
        rua: {
          type: DataTypes.STRING,
        },
        numero: {
          type: DataTypes.INTEGER,
        },
        bairro: {
          type: DataTypes.STRING,
        },
        cidade: {
          type: DataTypes.STRING,
        },
  
        //CONTATOS
        celular: {
          type: DataTypes.STRING,
        },
        fixo: {
          type: DataTypes.STRING,
        },
        whatsapp: {
          type: DataTypes.STRING,
        },
  
        //CONSULTAS
        consulta_clinica: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        consulta_online: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        consulta_home: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
  
        //TIME STAMPS
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