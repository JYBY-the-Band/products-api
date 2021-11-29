'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Features extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product);
    }
  };
  Features.init({
    feature: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'features',
    modelName: 'Feature',
  });
  return Features;
};