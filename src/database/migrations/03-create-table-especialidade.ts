import { DataTypes, QueryInterface, Sequelize } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("especialidade", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      especialidade: {
        type: DataTypes.STRING(255),
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
      createdAt: {
        type: DataTypes.DATE(),
      },
      updatedAt: {
        type: DataTypes.DATE(),
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("especialidade");
  },
};
