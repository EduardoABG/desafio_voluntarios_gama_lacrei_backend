import { DataTypes, QueryInterface } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("servicos", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(255),
      },
      duracao: {
        type: DataTypes.STRING(255),
      },
      valor: {
        type: DataTypes.STRING(255),
      },
      modalidade: {
        type: DataTypes.STRING(255),
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
      createdAt: {
        type: DataTypes.DATE(),
      },
      updatedAt: {
        type: DataTypes.DATE(),
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("servicos");
  },
};
