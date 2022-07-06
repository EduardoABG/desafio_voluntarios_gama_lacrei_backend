import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("profissional", {
      //PRE-CADASTRO
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
        type: DataTypes.STRING(20),
      },
      nome_completo: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      prefixo_profissao: {
        type: DataTypes.STRING(10),
        references: {
          model: {
            tableName: "profissao",
          },
          key: "prefixo",
        },
      },
      num_registro: {
        type: DataTypes.INTEGER(),
      },
      senha: {
        type: DataTypes.STRING(300),
      },
      termos: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },

      //CADASTRO
      foto_perfil: {
        type: DataTypes.STRING(255),
      },
      descricao_foto: {
        type: DataTypes.STRING(255),
      },
      sobre: {
        type: DataTypes.STRING(1000),
      },
      especialidade: {
        type: DataTypes.STRING(100),
      },
      foto_rosto_carteira: {
        type: DataTypes.STRING(255),
      },
      carta_entrada: {
        type: DataTypes.STRING(1000),
      },
      //POS-CADASTRO
      pronome_artigo: {
        type: DataTypes.STRING(50),
      },
      etnia: {
        type: DataTypes.STRING(20),
      },
      identidade: {
        type: DataTypes.STRING(30),
      },
      sexualidade: {
        type: DataTypes.STRING(30),
      },
      pcd: {
        type: DataTypes.STRING(30),
      },
      publico_alvo: {
        type: DataTypes.STRING(30),
      },
      rqe: {
        type: DataTypes.STRING(255),
      },
      doencas: {
        type: DataTypes.STRING(255),
      },
      formacao: {
        type: DataTypes.STRING(255),
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("profissional");
  },
};
