'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shopingCart.init({
    productAndCount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shopingCart',
  });
  return shopingCart;
};
