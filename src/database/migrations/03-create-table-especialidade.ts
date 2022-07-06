import { DataTypes, QueryInterface } from "sequelize";
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
      profissao_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "profissao",
            schema: "schema",
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
