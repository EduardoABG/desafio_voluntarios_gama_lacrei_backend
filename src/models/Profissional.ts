import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Profissional {
  instance: any;
  modelName: string = "Profissional";

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
        ativo: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        estado_atuacao: {
          type: DataTypes.STRING,
        },
        nome_completo: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        prefixo_profissao: {
          type: DataTypes.STRING,
          references: {
            model: {
              tableName: "profissao",
            },
            key: "prefixo",
          },
        },
        num_registro: {
          type: DataTypes.INTEGER,
        },
        senha: {
          type: DataTypes.STRING,
        },
        termos: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
  
        //CADASTRO
        foto_perfil: {
          type: DataTypes.STRING,
        },
        descricao_foto: {
          type: DataTypes.STRING,
        },
        sobre: {
          type: DataTypes.STRING,
        },
        especialidade: {
          type: DataTypes.STRING,
        },
        foto_rosto_carteira: {
          type: DataTypes.STRING,
        },
        carta_entrada: {
          type: DataTypes.STRING,
        },
        //POS-CADASTRO
        pronome_artigo: {
          type: DataTypes.STRING,
        },
        etnia: {
          type: DataTypes.STRING,
        },
        identidade: {
          type: DataTypes.STRING,
        },
        sexualidade: {
          type: DataTypes.STRING,
        },
        pcd: {
          type: DataTypes.STRING,
        },
        publico_alvo: {
          type: DataTypes.STRING,
        },
        rqe: {
          type: DataTypes.STRING,
        },
        doencas: {
          type: DataTypes.STRING,
        },
        formacao: {
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