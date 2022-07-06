import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("horario", {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      hora_inicio: {
        type: DataTypes.TIME(),
      },
      hora_fim: {
        type: DataTypes.TIME(),
      },
      domingo: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      segunda: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      terca: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      quarta: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      quinta: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      sexta: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
      sabado: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
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
    return queryInterface.dropTable("horario");
  },
};
