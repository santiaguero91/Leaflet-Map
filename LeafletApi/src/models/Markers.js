const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "marker",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      data: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
