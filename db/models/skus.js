'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SKUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Style);
    }
  };
  SKUs.init({
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'skus',
    modelName: 'SKU',
  });
  return SKUs;
};