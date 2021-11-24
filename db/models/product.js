'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Feature);
      // This doesnt work cause they're from the same table
      // I'm just going to not have the related_items have explict relations
      // this.belongsToMany(this, {
      //   through: models.RelatedItem
      // })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    slogan: DataTypes.STRING,
    description: DataTypes.STRING,
    default_price: DataTypes.FLOAT
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};