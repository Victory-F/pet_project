"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      word.belongsTo(models.vocabulary, { foreignKey: "vocabularyId" });
      word.belongsTo(models.category, { foreignKey: "categoryId" });
    }
  }
  word.init(
    {
      foreign: { type: DataTypes.STRING, allowNull: false },
      native: { type: DataTypes.STRING, allowNull: false },
      progress: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "word",
    }
  );
  return word;
};
