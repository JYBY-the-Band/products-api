'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product);

      this.hasMany(models.Photo);
      this.hasMany(models.SKU);
    }
  };
  Style.init({
    name: DataTypes.STRING,
    original_price: DataTypes.FLOAT,
    sale_price: DataTypes.FLOAT,
    default: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: false,
    tableName: 'styles',
    modelName: 'Style',
  });
  return Style;
};