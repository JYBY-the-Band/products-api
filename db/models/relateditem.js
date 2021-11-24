'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelatedItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RelatedItem.init({
    current_product_id: {
      type: DataTypes.INTEGER,
    },
    related_product_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    tableName: 'related_items',
    modelName: 'RelatedItem',
  });
  return RelatedItem;
};