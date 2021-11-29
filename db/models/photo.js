'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
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
  Photo.init({
    thumbnail_url: DataTypes.STRING(65535),
    photo_url: DataTypes.STRING(65535)
  }, {
    sequelize,
    timestamps: false,
    tableName: 'photos',
    modelName: 'Photo',
  });
  return Photo;
};