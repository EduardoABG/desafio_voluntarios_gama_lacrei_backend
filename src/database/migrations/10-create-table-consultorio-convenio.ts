import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("consultorio-convenio", {
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
            tableName: "convenio",
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
    return queryInterface.dropTable("consultorio-convenio");
  },
};
