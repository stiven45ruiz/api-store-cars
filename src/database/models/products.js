'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  products.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.BLOB,
    typeCar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
