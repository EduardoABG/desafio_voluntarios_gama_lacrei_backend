import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("profissao", {
      prefixo: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
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
    return queryInterface.dropTable("profissao");
  },
};
