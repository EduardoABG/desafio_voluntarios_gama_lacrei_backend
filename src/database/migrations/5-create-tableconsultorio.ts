import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("consultorio", {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      profissional_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "profissional",
            schema: "schema",
          },
          key: "id",
        },
      },
      nome: {
        type: DataTypes.STRING(255),
      },

      //ENDEREÇO
      rua: {
        type: DataTypes.STRING(255),
      },
      numero: {
        type: DataTypes.INTEGER(),
      },
      bairro: {
        type: DataTypes.STRING(255),
      },
      cidade: {
        type: DataTypes.STRING(255),
      },

      //CONTATOS
      celular: {
        type: DataTypes.STRING(255),
      },
      fixo: {
        type: DataTypes.STRING(255),
      },
      whatsapp: {
        type: DataTypes.STRING(255),
      },

      //CONSULTAS
      consulta_clinica: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      consulta_online: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      consulta_home: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },

      //TIME STAMPS
      createdAt: {
        type: DataTypes.DATE(),
      },
      updatedAt: {
        type: DataTypes.DATE(),
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("consultorio");
  },
};