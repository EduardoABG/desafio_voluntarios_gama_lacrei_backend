import { DataTypes, QueryInterface } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("sintomas", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: DataTypes.STRING(10),
      },
      sintoma: {
        type: DataTypes.STRING(255),
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
    return queryInterface.dropTable("sintomas");
  },
};
