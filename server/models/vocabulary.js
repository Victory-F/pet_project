"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vocabulary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vocabulary.init(
    {
      title: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "vocabulary",
    }
  );
  return vocabulary;
};
